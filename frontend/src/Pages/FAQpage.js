import React from 'react';
import SideNavbar from "../Components/ChatbotDashboardComponents/SideNavbar"

export default function FAQpage(){
    const faqs = [
        {
            question: "What is depression?",
            answer: "Depression is a mood disorder that causes persistent feelings of sadness, hopelessness, and loss of interest in activities. It can affect how you think, feel, and handle daily activities."
        },
        {
            question: "What are the common symptoms of depression?",
            answer: "Common symptoms of depression include persistent sadness, loss of interest or pleasure in activities, changes in appetite or weight, sleep disturbances, fatigue, feelings of worthlessness or guilt, difficulty concentrating, and thoughts of death or suicide."
        },
        {
            question: "What causes depression?",
            answer: "Depression is caused by a combination of genetic, biological, environmental, and psychological factors. Traumatic life events, chronic stress, imbalances in brain chemicals, and certain medical conditions can contribute to the development of depression."
        },
        {
            question: "How is depression diagnosed?",
            answer: "Depression is diagnosed based on a thorough evaluation of symptoms and medical history by a qualified healthcare professional. They may also use diagnostic criteria outlined in the Diagnostic and Statistical Manual of Mental Disorders (DSM-5)."
        },
        {
            question: "How is depression treated?",
            answer: "Treatment for depression may include psychotherapy, medication, or a combination of both. Cognitive-behavioral therapy (CBT), antidepressant medications, and lifestyle changes such as regular exercise, healthy diet, and stress management techniques are commonly used to manage depression."
        },
        {
            question: "Is depression curable?",
            answer: "While depression can be effectively managed with treatment, there is no single cure for it. With appropriate care and support, many individuals with depression can experience significant improvement in their symptoms and quality of life."
        },
        {
            question: "What should I do if I think I have depression?",
            answer: "If you suspect you may be experiencing symptoms of depression, it's important to seek help from a healthcare professional. They can provide an accurate diagnosis and recommend appropriate treatment options tailored to your needs."
        },
        {
            question: "How can I support someone with depression?",
            answer: "If someone you know is struggling with depression, offer your support and encouragement. Listen to them without judgment, validate their feelings, and encourage them to seek professional help. Be patient and understanding as they navigate their treatment journey."
        }
    ];

    return (
        <div className="flex">
            <SideNavbar />
            <div className="max-w-4xl text-gray-300 mx-auto px-4 py-8">
                <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions About Depression</h2>
                <ul>
                    {faqs.map((faq, index) => (
                        <li key={index} className="mb-6">
                            <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
                            <p className="text-gray-600">{faq.answer}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
