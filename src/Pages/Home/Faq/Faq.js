import React from 'react';

const Faq = () => {
    const faqs = [
        { id: 1, question: 'What is the most important gardening tool?', answer: 'The Garden Pruners, Branch Cutter, Garden Trowel, Gardening Fork, Hedge Shears all are most important and tranding tools for gardening.' },
        { id: 2, question: 'How do we keep gardening tools for its long lasting used?', answer: 'Avoid using petroleum products, such as motor oil, because the next time you use the tool, you will be introducing petroleum into your soil.Keep disinfecting wipes handy to remove sap, bacteria and fungus for a quick clean- up on the fly.Store tools in a dry, well - ventilated shed or garage.' },
        { id: 3, question: 'Is there any Free Consultancy Available?', answer: 'Yes, we have a 24 hours free consultancy for our valuable customer.' },
        { id: 4, question: 'What are the garden tools needed in weeding and cultivating?', answer: 'the hand trowel must be strong. Rakes – Iron rake, one of the most common weeding tools is needed for stones and weeds in garden beds and on walks. A grass rake only should be used on lawns.' },
        { id: 5, question: 'Why is it important to sharpen your tools?', answer: 'A properly sharpened tool can make a job much easier. Sharp tools help save time and effort. If you are patient and have the right equipment, putting a sharp edge on your landscape and garden tools is not difficult.' }
    ]
    return (
        <div class="collapse">
            <input type="checkbox" class="peer" />
            <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Click me to show/hide content
            </div>
            <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
            </div>
        </div>
    );
};

<script>
    AOS.init();
</script>

export default Faq;