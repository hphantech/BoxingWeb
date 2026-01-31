import Section from "@/components/Section";
import EmailCaptureForm from "@/components/EmailCaptureForm";

export default function AccessPage() {
  return (
    <div className="pt-20 min-h-screen flex items-center">
      <Section showDivider={false}>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
            ACCESS
          </h1>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-12 max-w-md mx-auto">
            Join our community. Get early access to new content, drops, and
            exclusive updates. No discounts. No hype. Just access.
          </p>
          <EmailCaptureForm />
        </div>
      </Section>
    </div>
  );
}
