const axios = require('axios');
const fs = require('fs');
const path = require('path');

const STRAPI_API_URL = 'http://localhost:1337'; // URL của Strapi
const OUTPUT_DIR = './content'; // Thư mục để lưu nội dung

async function fetchContent() {
  try {
    const response = await axios.get(`${STRAPI_API_URL}/products`);
    const content = response.data;

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    fs.writeFileSync(path.join(OUTPUT_DIR, 'products.json'), JSON.stringify(content, null, 2));
    console.log('Content fetched successfully');
  } catch (error) {
    console.error('Error fetching content:', error);
  }
}

fetchContent();
