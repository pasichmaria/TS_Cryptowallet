import "reflect-metadata";
import {User} from "@/core";
import {BiGlobe, BiHome, BiShield, BiSupport} from "react-icons/bi";
import {Col, Container} from "@/shared";
import {Hero} from "@/feautures/home/components";
import {Accordition} from "@/shared/components/Accordition";
import {Card} from "@/shared/components/Card";
interface HomeProps {
    handleLogin: () => void;
    handleWallet: () => void;
    handleSupport: () => void;
    isAuthenticated?: boolean;
    user?: User;
}

export const Home = ({
                         handleLogin,
                         handleWallet,
                         handleSupport,
                         user,
                     }: HomeProps) => {
    const features = [
        {
            icon: BiHome,
            title: "Easy to use",
            description: "Our platform is user-friendly and easy to navigate, making it simple for you to manage your crypto assets.",
        },
        {
            icon: BiShield,
            title: "Secure",
            description: "We take security seriously, implementing the latest security measures to protect your assets and data.",
        },
        {
            icon: BiSupport,
            title: "24/7 Support",
            description: "Our team is available around the clock to provide support and answer any questions you may have.",
        },
        {
            icon: BiGlobe,
            title: "Global",
            description: "We support a wide range of cryptocurrencies and are available to users around the world.",
        },
    ];

    const faqItems = [
        { question: "What is cryptocurrency?", answer: "Cryptocurrency is a digital currency that uses encryption techniques." },
        { question: "How can I buy Bitcoin?", answer: "You can buy Bitcoin on various exchanges like Coinbase or Binance." },
    ];

    return (
        <>
            <Col span={12}>
                <Hero
                    handleLogin={handleLogin}
                    handleWallet={handleWallet}
                    handleSupport={handleSupport}
                    user={user}
                />
            </Col>

            <Container>
                <Accordition items={faqItems} />
                <Card
                    features={features}
                    headingText="Why Choose Us?"
                />
            </Container>
        </>
    );
};
