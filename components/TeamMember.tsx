interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageColor: string;
}

const TeamMember = ({ name, role, bio, imageColor }: TeamMemberProps) => {
  return (
    <div className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border">
      <div className="flex flex-col items-center text-center">
        <div className={`h-24 w-24 rounded-full bg-gradient-to-r ${imageColor} mb-6 flex items-center justify-center text-white text-3xl font-bold`}>
          {name.charAt(0)}
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <div className="text-blue-600 dark:text-blue-400 font-semibold mb-4">{role}</div>
        <p className="text-muted-foreground mb-6">{bio}</p>
        
        <div className="flex space-x-4">
          <a
            href="#"
            className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-lg">🐦</span>
          </a>
          <a
            href="#"
            className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-lg">💼</span>
          </a>
          <a
            href="#"
            className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-lg">📧</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;