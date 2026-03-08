interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageColor: string;
}

const TeamMember = ({ name, role, bio, imageColor }: TeamMemberProps) => {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <div className="flex flex-col items-center text-center">
        <div className={`h-24 w-24 rounded-full bg-gradient-to-r ${imageColor} mb-6 flex items-center justify-center text-white text-3xl font-bold`}>
          {name.charAt(0)}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-blue-600 font-semibold mb-4">{role}</div>
        <p className="text-gray-600 mb-6">{bio}</p>
        
        <div className="flex space-x-4">
          <a
            href="#"
            className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
          >
            <span className="text-lg">🐦</span>
          </a>
          <a
            href="#"
            className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
          >
            <span className="text-lg">💼</span>
          </a>
          <a
            href="#"
            className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
          >
            <span className="text-lg">📧</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;