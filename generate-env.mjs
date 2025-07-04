import { writeFileSync, mkdirSync, existsSync } from 'fs';

const dir = './src/environments';
if (!existsSync(dir)) {
  mkdirSync(dir, { recursive: true });
}

const content = `
  export const environment = {
    production: true,
    emailjs: {
      publicKey: '${process.env.EMAILJS_PUBLIC_KEY}',
      serviceId: '${process.env.EMAILJS_SERVICE_ID}',
      templateId: '${process.env.EMAILJS_TEMPLATE_ID}'
    }
  };
`;

writeFileSync(`${dir}/environment.prod.ts`, content);
