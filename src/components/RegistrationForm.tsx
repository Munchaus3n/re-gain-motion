import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const registrationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  email: z.string().trim().email("Invalid email").max(255),
  program: z.enum(["kunera", "sparti", "not-sure"]),
  trainingType: z.enum(["personal", "group", "not-sure"]),
  goal: z.string().trim().max(500).optional(),
  experience: z.string().trim().max(200).optional(),
  injuries: z.string().trim().max(500).optional(),
  preferredTime: z.string().trim().max(200).optional(),
  message: z.string().trim().max(1000).optional(),
});

type RegistrationData = z.infer<typeof registrationSchema>;

const inputClasses = "w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition";
const labelClasses = "block text-sm font-body font-medium text-foreground mb-1.5";

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: { program: "not-sure", trainingType: "not-sure" },
  });

  const onSubmit = (data: RegistrationData) => {
    toast.success("Registration submitted! We'll be in touch soon.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>Name *</label>
          <input {...register("name")} className={inputClasses} placeholder="Your full name" />
          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClasses}>Phone *</label>
          <input {...register("phone")} type="tel" className={inputClasses} placeholder="+31 6 ..." />
          {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClasses}>Email *</label>
        <input {...register("email")} type="email" className={inputClasses} placeholder="your@email.com" />
        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>I'm interested in</label>
          <select {...register("program")} className={inputClasses}>
            <option value="kunera">KUNERA — For everyone</option>
            <option value="sparti">SPARTI — Women only</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        <div>
          <label className={labelClasses}>Training type</label>
          <select {...register("trainingType")} className={inputClasses}>
            <option value="personal">Personal Training</option>
            <option value="group">Group Training</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClasses}>What do you want to improve?</label>
        <input {...register("goal")} className={inputClasses} placeholder="Strength, mobility, confidence..." />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>Experience level</label>
          <input {...register("experience")} className={inputClasses} placeholder="Beginner, some experience..." />
        </div>
        <div>
          <label className={labelClasses}>Preferred days / times</label>
          <input {...register("preferredTime")} className={inputClasses} placeholder="Mornings, weekends..." />
        </div>
      </div>

      <div>
        <label className={labelClasses}>Injuries or physical limitations?</label>
        <input {...register("injuries")} className={inputClasses} placeholder="Any relevant information" />
      </div>

      <div>
        <label className={labelClasses}>Additional message</label>
        <textarea {...register("message")} rows={3} className={`${inputClasses} resize-none`} placeholder="Anything else you'd like us to know" />
      </div>

      <Button type="submit" className="w-full bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body py-6 gap-2">
        Submit Registration
        <ArrowRight className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default RegistrationForm;
