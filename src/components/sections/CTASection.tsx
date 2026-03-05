import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function CTASection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="py-56 px-8 border-t border-neutral-900">
      <div className="max-w-5xl mx-auto bg-white p-20 text-center text-black shadow-[30px_30px_0px_0px_rgba(245,158,11,1)] transition-transform hover:-translate-x-2 hover:-translate-y-2">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 uppercase leading-[0.9]">
          Start Your <br /> First Loop.
        </h2>
        
        <p className="text-neutral-600 mb-14 text-xl font-medium max-w-xl mx-auto tracking-tight leading-relaxed">
          Join the world's most aggressive startups scaling with autonomous agent clusters.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto border-4 border-black group">
          <EmailInput value={email} onChange={setEmail} />
          <SubmitButton subscribed={subscribed} />
        </form>
        
        {subscribed && <SuccessMessage />}
      </div>
    </section>
  );
}

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
}

function EmailInput({ value, onChange }: EmailInputProps) {
  return (
    <input
      type="email"
      placeholder="YOUR@EMAIL.COM"
      className="flex-1 px-8 py-6 bg-white text-black focus:outline-none font-black uppercase text-xs tracking-widest"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
    />
  );
}

interface SubmitButtonProps {
  subscribed: boolean;
}

function SubmitButton({ subscribed }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="bg-black text-white px-12 py-6 font-black text-xs tracking-[0.25em] uppercase hover:bg-amber-500 hover:text-black transition-all flex items-center justify-center gap-2 group-hover:gap-4"
    >
      {subscribed ? 'CONFIRMED' : 'INITIALIZE'}
      {!subscribed && <ArrowUpRight size={16} />}
    </button>
  );
}

function SuccessMessage() {
  return (
    <p className="mt-8 text-[10px] font-black tracking-[0.4em] text-amber-600 uppercase animate-pulse">
      Request sequence started. Stand by.
    </p>
  );
}
