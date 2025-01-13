export const observeSections = (setActiveNav) => {
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveNav(`#${entry.target.id}`);
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => observer.observe(section));

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setActiveNav('#');
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    observer.disconnect();
    window.removeEventListener('scroll', handleScroll);
  };
};
