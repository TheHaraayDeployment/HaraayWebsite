import React, { useRef } from "react";
import styles from "./blog2.module.scss";
import heroimg from "../../assets/blogs/blog2heroimg.jpg";
import img2 from "../../assets/blogs/blog2sec2.png";
import img3 from "../../assets/blogs/blog2img3.png";
export default function Blog2() {
  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
      const scrollAmount = isMobile ? window.innerWidth * 0.93 : 648;
      sliderRef.current.scrollBy({ 
        left: direction === "left" ? -scrollAmount : scrollAmount, 
        behavior: "smooth" 
      });
    }
  };
  
  const scroll2 = (direction) => {
    if (sliderRef2.current) {
      const isMobile = window.innerWidth <= 768;
      const scrollAmount = isMobile ? window.innerWidth * 0.93 : 648;
      sliderRef2.current.scrollBy({ 
        left: direction === "left" ? -scrollAmount : scrollAmount, 
        behavior: "smooth" 
      });
    }
  };
  
  return (
    <div className={styles.blog2page}>
      <div className={styles.heroSec}>
        <img src={heroimg} alt="" />
        <h2>6 Steps to Creating a Personal Style</h2>
      </div>

      <div className={styles.secOne}>
        <div className={styles.leftDiv}>
          <h2>Creating Your Unique Style and Voice</h2>
          <ul>
            <li>
              Every groundbreaking idea begins with a simple yet powerful
              question: Why? Take a moment to reflect—what frustrates or
              disappoints you about the world around you? Jot down these "whys"
              and let them guide your thinking. Each one holds the seed of a
              solution, waiting for you to bring it to life.
            </li>
            <li>
              The notion of 'innate talent' is nothing more than a myth. No one
              is born a master artist or designer—I was downright terrible when
              I first began. The truth is, greatness comes from relentless
              effort: putting in the hours, learning, refining, and constantly
              evolving your craft. It’s the grind that shapes the genius.
            </li>
            <li>
              If your brand looks like everyone else’s, it’ll blend into the
              noise—forgettable and overlooked. Memorable brands break the mold.
              Great branding is bold, unique, and unmistakably yours.
            </li>
          </ul>
        </div>
        <div className={styles.rightDiv}>
          <img src={img2} alt="" />
        </div>
      </div>
      <div className={styles.secTwo}>
        <button
          className={styles.navButton}
          onClick={() => scroll("left")}
          style={{ outline: "none", border: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
          >
            <rect width="52" height="52" rx="26" fill="#C7C7C7" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14 26L21.9103 18L23.1969 19.299L17.4782 25.0813L38 25.0813V26.9187L17.4782 26.9187L23.1969 32.6991L21.9103 34L14 26Z"
              fill="#2B2322"
              fill-opacity="0.5"
            />
          </svg>
        </button>
        <div className={styles.slider} ref={sliderRef}>
          <div className={styles.card}>
            <h3>Know Your "Why"</h3>
            <p>
              Every great brand starts with a purpose. Why do you exist beyond
              making a profit? This purpose should resonate through your visual
              identity, your messaging, and the experiences you create. Your
              ‘why’ is your brand’s foundation, shaping every element of its
              personality.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Be Authentic</h3>
            <p>
              Authenticity is the currency of modern branding. Audiences today
              are savvy; they can sense when a brand isn’t true to itself.
              Honesty and transparency not only build trust but also create a
              more resilient brand. Know your values, live by them, and let them
              guide every design and messaging decision.
            </p>
          </div>{" "}
          <div className={styles.card}>
            <h3>Stay Consistent</h3>
            <p>
            Consistency builds familiarity, which builds trust. From your logo to your social media captions, every element should reinforce your brand’s identity. Establish a visual and tonal style guide to ensure every touchpoint feels connected, from color schemes to typography and voice.
            </p>
          </div>{" "}
          <div className={styles.card}>
            <h3>Embrace Simplicity</h3>
            <p>
            Simplicity is power. The best brands communicate their essence quickly and effectively. Focus on distilling your brand to its core elements, ensuring each element serves a purpose. Simple logos, clean typography, and minimalistic design are not only timeless but also impactful.
            </p>
          </div>{" "}
          <div className={styles.card}>
            <h3>Think Beyond the Logo</h3>
            <p>
            A brand is much more than a logo. While a logo is essential, think about every experience your audience has with your brand — packaging, website, customer service, and even how you interact on social media. Every interaction is an opportunity to reinforce who you are and what you stand for.
            </p>
          </div>{" "}
          <div className={styles.card}>
            <h3>Design with Emotion</h3>
            <p>
            Emotion is what makes brands memorable. When crafting your visual identity, think about how you want people to feel when they encounter your brand. Do you want them to feel inspired, comforted, or energized? Use colors, imagery, and messaging that evoke the right emotional response.
            </p>
          </div>    <div className={styles.card}>
            <h3>Prioritize User Experience (UX)</h3>
            <p>
            Great design isn’t just beautiful; it’s functional. Your brand’s digital presence should be intuitive and engaging. Prioritize user experience across your website, apps, and any digital touchpoints. Make it easy for people to interact with your brand and navigate your offerings.
            </p>
          </div>    <div className={styles.card}>
            <h3>Tell a Story</h3>
            <p>
            A compelling brand tells a story. Craft a brand narrative that connects with your audience on a deeper level. Every piece of content, from your About page to your social media posts, should be part of a larger story that resonates with your audience and reinforces your brand’s purpose.
            </p>
          </div>    <div className={styles.card}>
            <h3>Adapt & Evolve</h3>
            <p>
            Brands are living entities that must evolve to stay relevant. Regularly revisit your brand identity to ensure it reflects your growth, audience needs, and market trends. Stay agile and open to change, embracing updates that keep you relevant while staying true to your core.
            </p>
          </div>    <div className={styles.card}>
            <h3>Create Community</h3>
            <p>
            Brands that build communities become irreplaceable. Design your brand to engage, inspire, and bring people together. Whether it’s through social media, events, or online spaces, make your brand a place where people feel connected and valued.
            </p>
          </div>
        </div>
        <button
          className={styles.navButton2}
          onClick={() => scroll("right")}
          style={{ outline: "none", border: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
          >
            <rect width="52" height="52" rx="26" fill="#AEF4F4" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M38 26L30.0897 34L28.8031 32.701L34.5218 26.9187H14V25.0813H34.5218L28.8031 19.3009L30.0897 18L38 26Z"
              fill="#2B2322"
            />
          </svg>
        </button>
        <div className={styles.buttonssec2}>
        <button
          className={styles.navButtonm}
          onClick={() => scroll("left")}
          style={{ outline: "none", border: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
          >
            <rect width="52" height="52" rx="26" fill="#C7C7C7" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14 26L21.9103 18L23.1969 19.299L17.4782 25.0813L38 25.0813V26.9187L17.4782 26.9187L23.1969 32.6991L21.9103 34L14 26Z"
              fill="#2B2322"
              fill-opacity="0.5"
            />
          </svg>
        </button>    <button
          className={styles.navButtonm}
          onClick={() => scroll("right")}
          style={{ outline: "none", border: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
          >
            <rect width="52" height="52" rx="26" fill="#AEF4F4" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M38 26L30.0897 34L28.8031 32.701L34.5218 26.9187H14V25.0813H34.5218L28.8031 19.3009L30.0897 18L38 26Z"
              fill="#2B2322"
            />
          </svg>
        </button>
        </div>
      </div>
      <div className={styles.secThree}>
        <div className={styles.leftDiv}>
          <img src={img3} alt="" />
        </div>
        <div className={styles.rightDiv}>
          <h2>What’s Next for Haraay?</h2>

          <p>
            At Haraay Design Studio, change isn’t just a buzzword; it’s a
            philosophy. As we turn a new page with our recent rebranding, we
            wanted to share not only what’s behind our fresh look but also
            what’s ahead. Our journey so far has been powered by a dedication to
            creativity, client success, and the belief that each project we take
            on is an opportunity to redefine design. Here’s what you can expect
            next from Haraay — and why we’re more excited than ever for the road
            ahead.
          </p>
        </div>
      </div>
      <div className={styles.secFour}>
        <button
          className={styles.navButton}
          onClick={() => scroll2("left")}
          style={{ outline: "none", border: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
          >
            <rect width="52" height="52" rx="26" fill="#C7C7C7" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14 26L21.9103 18L23.1969 19.299L17.4782 25.0813L38 25.0813V26.9187L17.4782 26.9187L23.1969 32.6991L21.9103 34L14 26Z"
              fill="#2B2322"
              fill-opacity="0.5"
            />
          </svg>
        </button>
        <div className={styles.slider} ref={sliderRef2}>
          <div className={styles.card}>
            <h3>Embracing Change with Purpose</h3>
            <p>
              This rebrand was not simply a facelift. It was an opportunity for
              us to ask fundamental questions: Who are we? What kind of impact
              do we want to have? How can we best serve our clients as they grow
              and evolve? The answers have shaped a brand identity that reflects
              not only who we are now but who we aspire to be — bold,
              forward-thinking, and deeply connected to the unique goals of our
              clients.
            </p>
          </div>
          <div className={styles.card}>
            <h3>An Elevated Focus on Client-Centered Design</h3>
            <p>
              In the coming months, we’re doubling down on what we’re best known
              for: client-centered, impact-driven design. Our team has expanded
              and is now equipped with specialized talents in branding, user
              experience (UX), and digital transformation. This allows us to
              offer a holistic approach to projects, creating cohesive brand
              identities that feel both powerful and personal. We believe design
              is at its best when it’s built around a deep understanding of our
              clients’ goals, and we’re excited to continue building
              partnerships rooted in that principle.
            </p>
          </div>{" "}
          <div className={styles.card}>
            <h3>A New Digital Experience with Our Website</h3>
            <p>
            Alongside our rebrand, we’ve launched a brand-new website that captures our essence and ambitions. The new site is designed not only to be visually appealing but also to provide a seamless user experience, reflecting the quality and thoughtfulness we bring to each client project.
            The revamped website showcases our expanded portfolio, giving a behind-the-scenes look at some of our favorite projects and their impact. We’ve added a section for design resources, articles, and insights on trends that matter to our clients. And we now offer a client portal where our partners can easily track their projects and communicate with our team in real time.
            </p>
          </div>{" "}
          <div className={styles.card}>
            <h3>The Future of Creativity and Technology</h3>
            <p>
            One of the things we’re most excited about is exploring how technology can empower creativity. We’re diving into emerging tools like AI and AR/VR to see how they can bring even more value to our clients. Imagine brand experiences that go beyond the screen, engaging audiences in immersive, interactive ways. These tools hold massive potential, and our team is committed to understanding and leveraging them responsibly to enhance — not replace — the authentic human touch we bring to our work.


            </p>
          </div>{" "}
          <div className={styles.card}>
            <h3>Expanding Our Community</h3>
            <p>
            Haraay has always been more than a design studio; it’s a community of innovators, storytellers, and brand builders. Over the next year, we’ll be launching a series of workshops, both virtual and in-person, aimed at helping our clients and followers better understand the design process, brand development, and digital transformation. From hands-on workshops to behind-the-scenes content and live Q&A sessions, we’re eager to engage directly with those who inspire us daily — our clients and followers.
            </p>
          </div>{" "}
        
        </div>
        <button
          className={styles.navButton}
          onClick={() => scroll2("right")}
          style={{ outline: "none", border: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
          >
            <rect width="52" height="52" rx="26" fill="#AEF4F4" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M38 26L30.0897 34L28.8031 32.701L34.5218 26.9187H14V25.0813H34.5218L28.8031 19.3009L30.0897 18L38 26Z"
              fill="#2B2322"
            />
          </svg>
        </button>
        <div className={styles.buttonssec2}>
        <button
          className={styles.navButtonm}
          onClick={() => scroll2("left")}
          style={{ outline: "none", border: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
          >
            <rect width="52" height="52" rx="26" fill="#C7C7C7" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14 26L21.9103 18L23.1969 19.299L17.4782 25.0813L38 25.0813V26.9187L17.4782 26.9187L23.1969 32.6991L21.9103 34L14 26Z"
              fill="#2B2322"
              fill-opacity="0.5"
            />
          </svg>
        </button>    <button
          className={styles.navButtonm}
          onClick={() => scroll2("right")}
          style={{ outline: "none", border: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
          >
            <rect width="52" height="52" rx="26" fill="#AEF4F4" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M38 26L30.0897 34L28.8031 32.701L34.5218 26.9187H14V25.0813H34.5218L28.8031 19.3009L30.0897 18L38 26Z"
              fill="#2B2322"
            />
          </svg>
        </button>
        </div>
      </div>
     <div className={styles.nxtbtndiv}>
     <button className={styles.nxrbtn}>Next Article <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="12" fill="#E5348C"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 11.9561L14.0448 15.9122L13.4015 15.2698L16.2609 12.4104H6V11.5018H16.2609L13.4015 8.6433L14.0448 8L18 11.9561Z" fill="white"/>
</svg></button>
     </div>
    </div>
  );
}
