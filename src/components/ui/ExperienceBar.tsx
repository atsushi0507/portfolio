interface ExperienceBarProps {
    years: number;
}

export const ExperienceBar = ({years}: ExperienceBarProps) => {
    return (
      <div className="w-full bg-gray-300 rounded overflow-hidden h-5 relative">
        <div
          className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
          style={{width: `${years}%`}}
        ></div>
      </div>
    )
}