import SEO from '../components/Layout/SEO'
import AnimatedText from '../components/UI/AnimatedText'
import MagneticButton from '../components/UI/MagneticButton'
import FloatingBlobs from '../components/UI/FloatingBlobs'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-mesh-1" />
        <FloatingBlobs />
        <div className="relative text-center px-6">
          <span className="font-display text-display-xl font-semibold text-gradient">404</span>
          <AnimatedText
            text="This cut didn't make the final edit."
            as="h1"
            className="text-display-md font-display font-semibold text-ink mt-4"
          />
          <p className="text-ink-soft mt-5 max-w-md mx-auto">
            The page you're looking for has been moved, renamed, or never existed.
          </p>
          <div className="mt-9 flex justify-center">
            <MagneticButton to="/" variant="solid" cursorLabel="Home">
              Back to Home
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  )
}
