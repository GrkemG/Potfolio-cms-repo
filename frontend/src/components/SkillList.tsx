type SkillListProps = {
  skills: { id: number; name: string }[];
};

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {skills.map((skill) => (
        <div
          key={skill.id}
          style={{
            backgroundColor: "#38a169",
            color: "white",
            padding: "8px 16px",
            borderRadius: "30px",
            fontWeight: "500",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            transition: "transform 0.2s, box-shadow 0.2s",
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            target.style.transform = "scale(1.1)";
            target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget;
            target.style.transform = "scale(1)";
            target.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
          }}
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export default SkillList;
