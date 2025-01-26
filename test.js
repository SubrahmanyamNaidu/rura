function convertToHTML(plainText) {
    return plainText
      .replace(/\n/g, '<br>')  // Convert new lines to <br>
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  // Bold
      .replace(/\*(.*?)\*/g, '<em>$1</em>');  // Italics
  }
  
  const plainText = `Entrepreneurship is the cornerstone of economic and social progress. The RURA Foundation’s programs foster innovation and provide individuals with the skills, knowledge, and resources needed to build sustainable businesses. We work across sectors to ensure entrepreneurial growth in both rural and urban communities.  



 

1. Rural Entrepreneurship Development 

We empower rural communities by nurturing local entrepreneurs and promoting self-sustaining economic models. From handicrafts to small-scale manufacturing, our programs provide training, resources, and mentorship to transform ideas into thriving businesses. This initiative also focuses on creating local job opportunities and reducing migration to urban areas.  



 

2. Entrepreneurship for Kids 

Our unique programs inspire young minds to think creatively and develop problem-solving skills. Through interactive workshops, competitions, and mentorship, children learn the fundamentals of business and innovation. By cultivating an entrepreneurial mindset early on, we prepare the next generation to tackle future challenges.  
 

 

3. Agripreneurship Development 

Agriculture remains a vital sector for many communities, and innovation in this area can drive economic growth. Our agripreneurship initiatives equip farmers and agri-professionals with modern techniques, business acumen, and access to markets. We support ventures in organic farming, agri-tech, and sustainable practices to ensure food security and profitability.  


 

4. Social Entrepreneurship Development 

Addressing social challenges through innovative business models is at the heart of this initiative. We mentor and support individuals passionate about creating social impact while ensuring financial sustainability. These ventures tackle issues like education, healthcare, and environmental conservation.  



 

5. Technological Business Development 

Technology is a driving force in today’s economy. We empower entrepreneurs to leverage cutting-edge technologies such as AI, IoT, and blockchain to create innovative solutions. Our programs provide access to technical training, funding opportunities, and industry networks.  



 

6. Green Business Development 

Environmental sustainability is a priority, and our green business initiatives promote eco-friendly practices in entrepreneurship. From renewable energy startups to sustainable product development, we guide businesses in aligning profitability with environmental responsibility.  



 

7. Digitizing the Businesses 

Traditional businesses must adapt to the digital age to remain competitive. Our programs focus on helping businesses transition to e-commerce, adopt digital marketing strategies, and automate processes. We aim to create a seamless digital transformation for enterprises.  `;
  const htmlContent = convertToHTML(plainText);
  
  console.log(htmlContent);