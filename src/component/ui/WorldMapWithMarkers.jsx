
import React from 'react';
import worldMapImg from '../../assets/world_map.png';
const mapMarkers = [
    { top: '50%', left: '28%', label: 'Nigeria', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face' },
    { top: '24%', left: '15%', label: 'Kenya', img: 'https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779463331/shot-of-a-beautiful-young-woman-wearing-traditional-african-clothing-against-an-urban_ej1nse.jpg' },
    { top: '36%', left: '51%', label: 'Tanzania', img: 'https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779463313/Screenshot_2026-05-22_162006_xms8iu.png' },
    { top: '22%', left: '80%', label: 'Cameroon', img: 'https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779463277/images_3_kcpv3z.jpg' },
    { top: '12%', left: '36%', label: 'Namibia', img: 'https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779463280/istockphoto-1394347360-612x612_lrfa6f.jpg' },
    { top: '64%', left: '56%', label: 'Malawi', img: 'https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779463276/istockphoto-2052274106-612x612_saiybs.jpg' },
];

const WorldMapWithMarkers = () => (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-4">
        <img
            src={worldMapImg}
            alt="Africa presence map"
            className="w-full h-auto object-contain max-h-[400px] opacity-80"
        />
        {mapMarkers.map((marker, i) => (
            <div
                key={i}
                className="absolute flex flex-col items-center group"
                style={{
                    top: marker.top,
                    left: marker.left,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${i * 0.4}s`,
                    animationDuration: '10s',
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite',
                }}
            >
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#EB010C] shadow-md ring-4 ring-[#EB010C]/10 group-hover:scale-110 transition-transform cursor-pointer">
                    <img src={marker.img} alt={marker.label} className="w-full h-full object-cover" />
                </div>
                <div className="mt-1 bg-slate-900 text-white text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded shadow-md whitespace-nowrap opacity-100 pointer-events-none">
                    {marker.label}
                </div>
            </div>
        ))}
    </div>
);

export default WorldMapWithMarkers;