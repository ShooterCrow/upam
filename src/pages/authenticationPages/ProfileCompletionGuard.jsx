import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCompleteness } from "./authSlice";
import { Shield, ChevronRight, AlertCircle, CheckCircle2 } from "lucide-react";

const CompletionBanner = ({ completeness }) => {
    const steps = [
        { id: 1, name: "Personal Info", data: completeness.step1 },
        { id: 2, name: "Verification", data: completeness.step2 },
        { id: 3, name: "Safety Info", data: completeness.step3 }
    ];

    const currentStep = steps.find(s => !s.data.complete);
    if (!currentStep) return null;

    const stepInfo = {
        1: { title: "Step 1: Personal Profile", desc: "Complete your basic identity information and verify your phone number." },
        2: { title: "Step 2: Member Verification", desc: "Submit your membership application and government ID for review." },
        3: { title: "Step 3: Emergency Contacts", desc: "Provide emergency contact and next of kin details for your safety." }
    };

    const info = stepInfo[currentStep.id];

    return (
        <div className="bg-red-600 border-b border-red-700 py-2.5 px-4 md:px-8 animate-in slide-in-from-top duration-500 sticky top-0 z-[100] w-[70%] mx-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                        <Shield size={20} className="animate-pulse" />
                    </div>
                    <div>
                        <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                            Access Restricted <span className="text-red-200 text-[10px] bg-red-800 px-2 py-0.5 rounded-full">{info.title}</span>
                        </h4>
                        <p className="text-red-50 text-xs font-medium max-w-3xl mt-0.5">
                            To protect our community, you must complete your profile. {info.desc}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {steps.map((s, i) => (
                        <div key={i} className="flex items-center">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border-2 transition-all ${s.data.complete ? 'bg-white border-white text-red-600' : s.id === currentStep.id ? 'bg-red-800 border-white text-white scale-110' : 'bg-red-700/50 border-red-500 text-red-400'}`}>
                                {s.data.complete ? <CheckCircle2 size={12} /> : s.id}
                            </div>
                            {i < steps.length - 1 && <div className={`w-4 h-0.5 mx-1 ${steps[i + 1].id <= currentStep.id ? 'bg-white' : 'bg-red-700'}`} />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProfileCompletionGuard = () => {
    const completeness = useSelector(selectCompleteness);
    const location = useLocation();

    // If completeness data is missing (e.g., initial state or still loading), allow through 
    // but ideally we should have it from login/refresh.
    if (!completeness) {
        return <Outlet />;
    }

    // Step 1: User Info
    if (!completeness.step1.complete) {
        if (location.pathname !== completeness.step1.path) {
            return <Navigate to={completeness.step1.path} replace />;
        }
    }
    // Step 2: Member Verification
    else if (!completeness.step2.complete) {
        if (location.pathname !== completeness.step2.path) {
            return <Navigate to={completeness.step2.path} replace />;
        }
    }
    // Step 3: Emergency & Next of Kin
    else if (!completeness.step3.complete) {
        if (location.pathname !== completeness.step3.path) {
            return <Navigate to={completeness.step3.path} replace />;
        }
    }

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
