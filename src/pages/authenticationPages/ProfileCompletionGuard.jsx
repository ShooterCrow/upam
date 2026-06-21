import { Navigate, Outlet, useLocation, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCompleteness } from "./authSlice";
import { Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useGetCompletenessQuery } from "./authApiSlice";

const CompletionBanner = ({ completeness }) => {
    const location = useLocation();
    const steps = [
        { id: 1, name: "Personal Info", data: completeness.step1 },
        { id: 2, name: "Verification", data: completeness.step2 },
        { id: 3, name: "Safety Info", data: completeness.step3 }
    ];

    const currentRequiredStep = steps.find(s => !s.data.complete);
    if (!currentRequiredStep) return null;

    const stepInfo = {
        1: { title: "Step 1: Personal Profile", desc: "Complete your basic identity information and verify your phone number." },
        2: { title: "Step 2: Member Verification", desc: "Submit your membership application and government ID for review." },
        3: { title: "Step 3: Emergency Contacts", desc: "Provide emergency contact and next of kin details for your safety." }
    };

    const info = stepInfo[currentRequiredStep.id];

    return (
        <div className="bg-red-600 border-b border-red-700 py-3 px-4 md:px-8 animate-in slide-in-from-top duration-500 sticky top-0 z-[100] w-full lg:w-[85%] xl:w-[75%] mx-auto">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/20">
                        <Shield size={24} className="animate-pulse" />
                    </div>
                    <div>
                        <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                            Restricted Access <span className="text-red-200 text-[10px] bg-red-800 px-2 py-0.5 rounded-full border border-red-700/50">{info.title}</span>
                        </h4>
                        <p className="text-red-50 text-xs font-medium max-w-7xl mt-0.5 opacity-90">
                            To protect our community, please complete your profile. {info.desc}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-1.5 md:gap-3 bg-red-900/20 p-2 rounded-2xl border border-white/5">
                    {steps.map((s, i) => {
                        const isViewing = location.pathname === s.data.path;
                        const isRequired = s.id === currentRequiredStep.id;

                        return (
                            <Link
                                key={i}
                                to={s.data.path}
                                className={`group relative flex items-center transition-all ${isViewing ? 'scale-105' : 'hover:scale-102'}`}
                            >
                                <div className={`
                                    relative w-9 h-9 rounded-full flex items-center justify-center text-xs font-black border-2 transition-all duration-300
                                    ${s.data.complete
                                        ? 'bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-900/20'
                                        : isViewing
                                            ? 'bg-white border-white text-red-600 shadow-xl'
                                            : isRequired
                                                ? 'bg-red-800 border-red-400 text-white animate-pulse'
                                                : 'bg-red-700/30 border-red-500/30 text-red-300'}
                                `}>
                                    {s.data.complete ? <CheckCircle2 size={16} strokeWidth={3} /> : s.id}

                                    {/* Action Required Badge */}
                                    {isRequired && (
                                        <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-900 text-[8px] font-black px-1.5 py-0.5 rounded-full shadow-sm border border-white animate-bounce">
                                            ACTION
                                        </span>
                                    )}

                                    {/* Tooltip-like label */}
                                    <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-bold uppercase tracking-widest transition-all duration-300 ${isViewing ? 'opacity-100 translate-y-0 text-white' : 'opacity-0 translate-y-1 text-red-200'}`}>
                                        {s.name}
                                    </span>
                                </div>
                                {i < steps.length - 1 && (
                                    <div className={`w-4 md:w-8 h-0.5 mx-1 transition-colors duration-500 ${steps[i + 1].id <= currentRequiredStep.id ? 'bg-white/40' : 'bg-red-950/30'}`} />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const ProfileCompletionGuard = () => {
    const completeness = useSelector(selectCompleteness);
    const location = useLocation();

    // Background fetch to keep completeness state in sync across redirects
    useGetCompletenessQuery(undefined, {
        pollingInterval: 30000, // Optional: fallback polling
        refetchOnMountOrArgChange: true
    });

    if (!completeness) return <Outlet />;

    // Step paths for allowed navigation during restriction
    const allowedPaths = [
        completeness.step1.path,
        completeness.step2.path,
        completeness.step3.path
    ];

    // If NOT all complete, handle mandatory redirection unless already on an allowed path
    if (!completeness.isAllComplete) {
        const isCurrentlyOnCompletionPath = allowedPaths.includes(location.pathname);

        if (!isCurrentlyOnCompletionPath) {
            // Find the first incomplete step path
            const firstIncompletePath = !completeness.step1.complete ? completeness.step1.path
                : !completeness.step2.complete ? completeness.step2.path
                    : completeness.step3.path;

            return <Navigate to={firstIncompletePath} replace />;
        }
    }

    // Wrap the content with the Completion Banner if still incomplete but on an allowed path
    return (
        <div className="flex flex-col min-h-screen">
            {!completeness.isAllComplete && <CompletionBanner completeness={completeness} />}
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default ProfileCompletionGuard;
