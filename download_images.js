
const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
    { name: "stainless-steel-pipe-fitting-tee.jpg", url: "https://cpimg.tistatic.com/6516180/b/4/stainless-steel-pipe-fittings.jpg" },
    { name: "stainless-steel-pipe-fitting-cross.jpg", url: "https://5.imimg.com/data5/NO/CQ/RM/SELLER-761146/cross-pipe-fitting.jpg" },
    { name: "stainless-steel-pipe-fitting-elbow.jpg", url: "https://5.imimg.com/data5/SELLER/Default/2024/6/429994015/XP/PB/OZ/23289747/stainless-steel-pipe-fitting-elbow-500x500.jpg" },
    { name: "ibr-approved-stainless-steel-pipe-fittings.jpg", url: "https://5.imimg.com/data5/SELLER/Default/2023/7/326304044/UX/MT/XZ/21573024/stainless-steel-ibr-pipe-fittings.jpg" },
    { name: "inconel-plates.jpg", url: "https://5.imimg.com/data5/SELLER/Default/2024/2/392600502/VY/NL/GQ/2062242/inconel-plates-1000x1000.jpg" },
    { name: "hot-cold-rolled-plates.jpg", url: "https://5.imimg.com/data5/ZH/AG/GG/SELLER-94159982/stainless-steel-hot-rolled-plate-1000x1000.jpg" },
    { name: "super-duplex-steel-uns-s32750-plates.jpg", url: "https://5.imimg.com/data5/SELLER/Default/2023/1/YV/OK/GA/3228023/super-duplex-steel-plates-500x500.jpg" },
    { name: "stainless-steel-plate.jpg", url: "https://5.imimg.com/data5/SELLER/Default/2020/9/MY/IZ/XO/3686882/stainless-steel-plates-500x500.jpg" },
    // { name: "stainless-steel-flange.jpg", url: "https://www.viraj.com/wp-content/uploads/2018/05/blog.jpg" }, // Failed
    { name: "slip-on-flange.jpg", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs7niFJbCMm6OTYLpT6HSCLE4i5JPf2JLAwA&s" },
    { name: "blind-flange.jpg", url: "https://steelflangemfg.com/wp-content/uploads/2020/10/blind-flanges-manufacturer.jpg" },
    { name: "weld-neck-flange.jpg", url: "https://steelflangemfg.com/wp-content/uploads/2020/10/weld-neck-flanges-manufacturer.jpg" },
    { name: "buttweld-fitting.jpg", url: "https://nandigrammetal.com/images/buttweld-fitting/buttwelded-fitting-manufacturers-in-india.jpg" },
    { name: "buttweld-cross.jpg", url: "https://www.micronsteel.com/wp-content/uploads/image/buttweld-equal-cross.jpg" },
    { name: "buttweld-end-caps.jpg", url: "https://petromatco.com/wp-content/uploads/image/buttweld/asme-b16-9-buttweld-end-cap.jpg" },
    { name: "forged-fitting.jpg", url: "https://cpimg.tistatic.com/06354023/b/4/Ss-Forged-Fittings.jpg" },
    { name: "forged-elbow.jpg", url: "https://dhanwantmetal.com/images/forged-fitting-manufacturers-in-india/forged-elbow/forged-elbow-90-deg-manufacturers-in-india.jpg" },
    { name: "forged-tee.jpg", url: "https://5.imimg.com/data5/SELLER/Default/2024/3/402748354/TM/YN/TF/7690867/stainless-steel-forged-tee2-500x500.jpg" },
    { name: "aluminum-bronze-round-bar.jpg", url: "https://cpimg.tistatic.com/4014708/b/5/aluminium-bronze-rods.jpg" },
    { name: "manganese-bronze-round-bar.jpg", url: "https://2.wlimg.com/product_images/bc-full/2024/5/12802800/c67600-high-tensile-manganese-bronze-rod-1715602025-7425903.jpg" },
    { name: "aluminum-bronze-round-bar-alloy.jpg", url: "https://5.imimg.com/data5/OM/OQ/MY-15521074/aluminium-bronze-round-bar-500x500.jpg" },
    { name: "phosphor-bronze-round-bar.jpg", url: "https://www.samaterials.com/images/sc/1731042977-CM3599.jpg" },
    { name: "lead-tin-bronze-round-bar.jpg", url: "https://5.imimg.com/data5/SELLER/Default/2023/6/319872132/KI/UV/OQ/57775261/bronze-round-bar.jpeg" },
    { name: "stainless-steel-round-bar.jpg", url: "https://lntsufin.com/storage/mediafiles/catalog/live/16592-1307/original/16592-1307_image_0.jpg" },
    { name: "stainless-steel-tubes.jpg", url: "https://www.astmsteelpipes.com/uploaded_files/category_images/Stainless-Steel-Pipes-and-Tubes-manufacturers-in-mumbai-02_09_05.jpg" },
    { name: "pipe-bends.jpg", url: "https://5.imimg.com/data5/SELLER/Default/2021/10/CQ/OC/GE/89336736/ss-long-radius-bend.jpg" },
    { name: "carbon-steel-olets.jpg", url: "https://www.marcelpiping.com/wp-content/uploads/2016/06/carbon-steel-olet-fittings.jpg" },
    { name: "duplex-steel-olets.jpg", url: "https://5.imimg.com/data5/SELLER/Default/2023/8/331220929/KW/XD/UU/1913761/stainless-steel-and-duplex-steel-olets-500x500.jpg" },
];

const downloadImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        const filePath = path.join(__dirname, 'public', 'products', filename);
        if (fs.existsSync(filePath)) {
            console.log(`Skipping ${filename} (exists)`);
            resolve();
            return;
        }

        const file = fs.createWriteStream(filePath);
        
        if (!url.startsWith('http')) {
            url = 'https:' + url;
        }

        const request = https.get(url, { 
            headers: { 
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8'
            },
            timeout: 10000 // 10s timeout
        }, (response) => {
            if (response.statusCode !== 200) {
                file.close();
                fs.unlink(filePath, () => {}); // Delete partial file
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${filename}`);
                resolve();
            });
        });

        request.on('error', (err) => {
            file.close();
            fs.unlink(filePath, () => {}); // Delete partial file
            reject(err);
        });

        request.on('timeout', () => {
            request.destroy();
            file.close();
            fs.unlink(filePath, () => {});
            reject(new Error('Timeout'));
        });
    });
};

async function downloadAll() {
    for (const image of images) {
        try {
            await downloadImage(image.url, image.name);
            // Add a small delay
            await new Promise(resolve => setTimeout(resolve, 500));
        } catch (error) {
            console.error(`Error downloading ${image.name}:`, error.message);
        }
    }
}

downloadAll();
