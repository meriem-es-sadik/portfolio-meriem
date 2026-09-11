const skillsData = [
  {
    title: 'Technical Skills',
    icon: 'fas fa-code',
    tags: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'Responsive Design', icon: 'fas fa-mobile-alt' },
      { name: 'Canva', icon: 'fas fa-palette' },
      { name: 'VS Code', icon: 'fas fa-code' },
      { name: 'Git & GitHub', icon: 'fab fa-git-alt' },
    ],
  },
  {
    title: 'Business & Management',
    icon: 'fas fa-briefcase',
    tags: [
      { name: 'General Accounting', icon: 'fas fa-calculator' },
      { name: 'Microeconomics', icon: 'fas fa-chart-line' },
      { name: 'Macroeconomics', icon: 'fas fa-chart-bar' },
      { name: 'Digital Marketing', icon: 'fas fa-bullhorn' },
      { name: 'Work Methodology', icon: 'fas fa-book' },
    ],
  },
  {
    title: 'Soft Skills',
    icon: 'fas fa-users',
    tags: [
      { name: 'Problem Solving', icon: 'fas fa-lightbulb' },
      { name: 'Communication', icon: 'fas fa-comments' },
      { name: 'Networking', icon: 'fas fa-network-wired' },
      { name: 'Teamwork', icon: 'fas fa-handshake' },
      { name: 'Logical Thinking', icon: 'fas fa-brain' },
      { name: 'Public Speaking', icon: 'fas fa-microphone' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillsData.map((card, index) => (
            <div className="skill-card" key={index}>
              <h4>
                <i className={card.icon}></i> {card.title}
              </h4>
              <ul className="skill-tags">
                {card.tags.map((tag, i) => (
                  <li key={i}>
                    <i className={tag.icon}></i> {tag.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
