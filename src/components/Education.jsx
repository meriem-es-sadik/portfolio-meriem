const educationData = [
  {
    title: 'Web Development Training',
    date: 'Nouaceur Wings Tech (Jadara Foundation) — Bouskoura | June 2026 – Present',
    items: [
      'Status: In Progress',
      'Intensive training focused on mastering HTML, CSS, JavaScript, responsive design, and front-end development.',
    ],
  },
  {
    title: 'Professional Teacher Training',
    date: 'Institut de Supériorité | June 2026 – Present',
    items: [
      'Status: In Progress',
      'Specialized training focused on pedagogy, teaching methodologies, classroom management, and educational practices.',
    ],
  },
  {
    title: "Bachelor's Degree in Economics and Management",
    date: 'Hassan II University of Casablanca (FSJES Ain Chock) | 2025 – Present',
    items: [
      'Status: In Progress',
      'Building strong knowledge in economics, management, finance, accounting, and business analysis.',
    ],
  },
  {
    title: 'High School Diploma (Baccalaureate) in Physics',
    date: 'Bouskoura | 2025',
    items: [
      'Developed analytical thinking, mathematical reasoning, and scientific problem-solving skills.',
    ],
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2>Education</h2>
        <div className="timeline">
          {educationData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <h4>{item.title}</h4>
              <span className="date">{item.date}</span>
              <ul>
                {item.items.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
