import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

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

const RegistrationForm = ({ compact = false }: { compact?: boolean }) => {
  const { t } = useLanguage();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: { program: "not-sure", trainingType: "not-sure" },
  });

  const inputClasses = compact
    ? "w-full px-3 py-2 rounded-md border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition"
    : "w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition";
  const labelClasses = compact
    ? "block text-xs font-body font-medium text-foreground mb-1"
    : "block text-sm font-body font-medium text-foreground mb-1.5";
  const gapClasses = compact ? "gap-3" : "gap-4";

  const onSubmit = (_data: RegistrationData) => {
    toast.success(t.form.success);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={compact ? "space-y-3" : "space-y-5"}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>{t.form.name} *</label>
          <input {...register("name")} className={inputClasses} placeholder={t.form.namePlaceholder} />
          {errors.name && <p className="text-xs text-destructive mt-1">{t.form.nameRequired}</p>}
        </div>
        <div>
          <label className={labelClasses}>{t.form.phone} *</label>
          <input {...register("phone")} type="tel" className={inputClasses} placeholder={t.form.phonePlaceholder} />
          {errors.phone && <p className="text-xs text-destructive mt-1">{t.form.phoneRequired}</p>}
        </div>
      </div>

      <div>
        <label className={labelClasses}>{t.form.email} *</label>
        <input {...register("email")} type="email" className={inputClasses} placeholder={t.form.emailPlaceholder} />
        {errors.email && <p className="text-xs text-destructive mt-1">{t.form.invalidEmail}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>{t.form.interestedIn}</label>
          <select {...register("program")} className={inputClasses}>
            <option value="kunera">{t.form.kuneraOption}</option>
            <option value="sparti">{t.form.spartiOption}</option>
            <option value="not-sure">{t.form.notSureOption}</option>
          </select>
        </div>
        <div>
          <label className={labelClasses}>{t.form.trainingType}</label>
          <select {...register("trainingType")} className={inputClasses}>
            <option value="personal">{t.form.personalOption}</option>
            <option value="group">{t.form.groupOption}</option>
            <option value="not-sure">{t.form.notSureOption}</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClasses}>{t.form.improve}</label>
        <input {...register("goal")} className={inputClasses} placeholder={t.form.improvePlaceholder} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>{t.form.experience}</label>
          <input {...register("experience")} className={inputClasses} placeholder={t.form.experiencePlaceholder} />
        </div>
        <div>
          <label className={labelClasses}>{t.form.preferredTime}</label>
          <input {...register("preferredTime")} className={inputClasses} placeholder={t.form.preferredTimePlaceholder} />
        </div>
      </div>

      <div>
        <label className={labelClasses}>{t.form.injuries}</label>
        <input {...register("injuries")} className={inputClasses} placeholder={t.form.injuriesPlaceholder} />
      </div>

      <div>
        <label className={labelClasses}>{t.form.message}</label>
        <textarea {...register("message")} rows={3} className={`${inputClasses} resize-none`} placeholder={t.form.messagePlaceholder} />
      </div>

      <Button type="submit" className="w-full bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body py-6 gap-2">
        {t.form.submit}
        <ArrowRight className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default RegistrationForm;
