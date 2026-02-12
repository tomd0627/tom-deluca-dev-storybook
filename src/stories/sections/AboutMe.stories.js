import AboutMe from '../../components/sections/AboutMe.astro';

export default {
  title: 'Sections/About Me',
  component: AboutMe,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

// Use a wrapper component that doesn't try to import the Image component
const AboutMeWithoutImage = {
  render: () => `
    <section id="about" class="section section--about">
      <div class="container">
        <div class="section__intro">
          <div class="section__title-wrapper animate-fade">
            <h2>About me</h2>
          </div>
          <p class="animate-fade">
            Hi there! I'm <span class="section__highlight">Tom DeLuca</span>, a passionate front-end
            developer based in Warwick, New York with a diverse professional background.
          </p>
          <p class="animate-fade">
            I craft <strong>seamless, responsive websites and web applications</strong> with a deep expertise
            in <strong>HTML, CSS, JavaScript, and modern web technologies</strong>. I bring designs to
            life with precision and clean code, while maintaining a strong focus on user experience,
            performance, and accessibility. Collaborating with designers, backend developers, and
            cross-functional teams is where I thrive.
          </p>
          <p class="animate-fade">
            Beyond development, my professional journey includes <strong>office administration and operations experience</strong>,
            which has honed my exceptional <strong>organizational skills, attention to detail, and ability to manage complex workflows</strong>.
            This unique combination makes me adaptable, reliable, and effective in diverse professional
            environments. I also provide <strong>medical and legal transcription services</strong> with precision
            and confidentiality.
          </p>
        </div>
        <div class="section__image animate-fade" style="background: #e9edf2; height: 400px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
          <div style="color: #666; font-weight: 600;">Headshot Image</div>
        </div>
      </div>
    </section>
  `,
};

export const Default = AboutMeWithoutImage;
