import dotenv from "dotenv"

dotenv.config()

const config = {
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRY: process.env.JWT_EXPIRY || "30d",
    MONGODB_URL: process.env.MONGODB_URL,
    PORT: process.env.PORT,
    SMTP_MAIL_HOST: valueone,
    SMTP_MAIL_PORT: valuetwo,
    SMTP_MAIL_USERNAME: valuethree,
    SMTP_MAIL_PASSWORD: valuefour,
    SMTP_MAIL_EMAIL: valuefive
}

export default config