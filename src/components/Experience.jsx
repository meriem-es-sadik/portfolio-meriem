const experienceData = [
  {
    title: 'Digital Marketing Intern',
    date: 'Librairie Al Irfan | 3-Month Internship',
    items: [
      'Assisted in digital marketing campaigns and customer engagement.',
      "Promoted products through online platforms and improved the company's digital presence.",
      'Communicated with customers and supported daily business operations.',
    ],
  },
  {
    title: 'Professional Networking Certification',
    date: 'HP LIFE Platform | June 2026',
    items: [
      'Successfully completed the "Professional Networking for Career Evolution" certification.',
      'Strengthened communication, networking, collaboration, and career development skills.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          {experienceData.map((item, index) => (
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
