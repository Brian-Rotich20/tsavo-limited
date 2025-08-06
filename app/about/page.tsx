// AboutPage.js
import Goals from "../components/Goals";
import Belief from "../components/Beliefs";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
     
      
      {/* Content Sections */}
      <Goals />
      <Belief />
      
      {/* Bottom Separator */}
      <div className="h-20 bg-gradient-to-b from-white to-slate-50"></div>
    </div>
  );
}