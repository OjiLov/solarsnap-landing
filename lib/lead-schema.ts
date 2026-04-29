import { z } from "zod";
export const leadSchema = z.object({
  name: z.string().min(2, "이름을 입력해주세요."),
  company: z.string().min(1, "회사명을 입력해주세요."),
  phone: z.string().min(8, "연락처를 입력해주세요."),
  email: z.string().email("이메일 형식이 올바르지 않습니다."),
  type: z.enum(["SALES_AGENT", "EPC_COMPANY", "FACTORY_OWNER", "INVESTOR", "PARTNER", "OTHER"]),
  message: z.string().optional(),
  consent: z.literal(true, { error: () => ({ message: "개인정보 수집 동의가 필요합니다." }) })
});
export type LeadFormValues = z.infer<typeof leadSchema>;
