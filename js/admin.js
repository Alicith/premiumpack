// ===== DEFAULT DATA =====
const DEFAULT_DATA = {
    general: {
        companyName: 'PremioPack',
        companyTagline: 'Premium Packaging Solutions',
        phone: '+971 50 123 4567',
        email: 'info@premiumpack.ae',
        address: 'Dubai, United Arab Emirates',
        facebook: '#',
        instagram: '#',
        linkedin: '#',
        whatsapp: '#'
    },
    hero: [
        {
            image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1920&q=80',
            subtitle: 'Premium Quality Packaging',
            title: 'Custom Packaging<br>Solutions for Your Brand',
            description: 'We design and deliver premium packaging that protects your products and elevates your brand identity across the UAE.',
            btn1Text: 'Our Services',
            btn1Link: '#services',
            btn2Text: 'Get a Quote',
            btn2Link: '#contact'
        },
        {
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80',
            subtitle: 'Eco-Friendly Options',
            title: 'Sustainable Packaging<br>For a Greener Future',
            description: 'Environmentally responsible packaging solutions without compromising on quality or design.',
            btn1Text: 'Learn More',
            btn1Link: '#services',
            btn2Text: 'Contact Us',
            btn2Link: '#contact'
        },
        {
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80',
            subtitle: 'Fast Turnaround',
            title: 'Professional Design<br>&amp; Printing Services',
            description: 'From concept to delivery — we handle everything with speed and precision.',
            btn1Text: 'View Services',
            btn1Link: '#services',
            btn2Text: 'Get Started',
            btn2Link: '#contact'
        }
    ],
    about: {
        title: 'Your Trusted Packaging Partner in the UAE',
        text1: 'PremioPack is a leading general trading company based in Dubai. With over 7 years of experience in the hospitality supply industry, we distribute customized disposable food packaging products for hotels, restaurants, and cafes across the UAE.',
        text2: 'We offer a wide range of services including Design & Printing, Commercial Items, Food Packaging Items, Hygiene Items, and more. Our strong business relationships with leading suppliers ensure consistent quality and competitive pricing.',
        expNumber: '7+',
        expText: 'Years of Excellence',
        features: [
            { icon: 'fas fa-leaf', title: 'Eco-Friendly Materials', desc: 'Sustainable and recyclable packaging options' },
            { icon: 'fas fa-paint-brush', title: 'Custom Design', desc: 'Full branding and design customization' },
            { icon: 'fas fa-shipping-fast', title: 'Fast Delivery', desc: 'Quick turnaround across the UAE' }
        ]
    },
    services: [
        { icon: 'fas fa-id-card', title: 'Business Card', desc: 'Premium business card printing with various finishes including matte, gloss, and embossed options.' },
        { icon: 'fas fa-print', title: 'Design & Printing', desc: 'Custom design and high-quality printing services for all your packaging and branding needs.' },
        { icon: 'fas fa-store', title: 'Commercial Items', desc: 'Wide range of commercial packaging supplies for retail and wholesale businesses.' },
        { icon: 'fas fa-utensils', title: 'Food Packaging', desc: 'Food-grade packaging solutions including boxes, containers, wraps, and eco-friendly options.' },
        { icon: 'fas fa-pump-soap', title: 'Hygiene Items', desc: 'Professional hygiene and sanitation supplies for hospitality and food service industries.' },
        { icon: 'fas fa-recycle', title: 'Eco Packaging', desc: 'Sustainable and biodegradable packaging solutions for environmentally conscious brands.' }
    ],
    products: [
        { image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=500&q=80', title: 'Custom Burger Boxes', desc: 'Grease-resistant, branded food boxes' },
        { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80', title: 'Eco-Friendly Bags', desc: 'Biodegradable paper and kraft bags' },
        { image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80', title: 'Retail Packaging', desc: 'Premium boxes for retail products' },
        { image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=500&q=80', title: 'Cup & Lid Sets', desc: 'Custom printed cups for beverages' }
    ],
    faq: [
        { q: 'What types of packaging do you offer?', a: 'We offer a wide variety of packaging options including custom boxes, retail packaging, food packaging, cosmetic packaging, eco-friendly packaging, and more.' },
        { q: 'Can I customize the packaging design?', a: 'Yes, all our packaging designs are fully customizable. You can personalize your packaging with your logo, colors, product information, and custom dimensions.' },
        { q: 'Do you provide eco-friendly packaging?', a: 'Absolutely. We specialize in sustainable packaging options such as recyclable boxes, biodegradable packaging materials, and compostable product packaging.' },
        { q: 'What is the minimum order quantity?', a: 'Minimum order quantities vary depending on the type of packaging and material. Please contact us with your requirements for the best solution.' },
        { q: 'Can you help with packaging design?', a: 'Yes, our experienced design team can assist you in creating attractive, high-quality packaging that enhances your product appeal and strengthens your brand.' },
        { q: 'What materials do you use?', a: 'We use a wide range of high-quality materials including cardboard, kraft paper, corrugated board, rigid box materials, and sustainable alternatives.' }
    ],
    contact: {
        title: 'Get In Touch',
        desc: 'If you have any questions or concerns about our packaging solutions, please don\'t hesitate to reach out. We\'re ready to assist with all your packaging needs.',
        hours: 'Sun - Thu: 9:00 AM - 6:00 PM'
    },
    footer: {
        desc: 'Your trusted packaging partner in the UAE. We deliver premium quality packaging solutions for businesses of all sizes.',
        copyright: '© 2026 PremioPack. All rights reserved.',
        newsletter: 'Subscribe to get updates on new products and offers.'
    }
};

// ===== DATA STORE =====
const STORAGE_KEY = 'premiumpack_data';

function loadData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);
    } catch (e) {}
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

let data = loadData();

// ===== DOM HELPERS =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function showToast(msg = '保存成功！') {
    const toast = $('#toast');
    $('#toastMsg').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== NAVIGATION =====
$$('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const section = item.dataset.section;
        $$('.nav-item').forEach(n => n.classList.remove('active'));
        item.classList.add('active');
        $$('.panel').forEach(p => p.classList.remove('active'));
        $(`#panel-${section}`).classList.add('active');
        // Close mobile sidebar
        $('#sidebar').classList.remove('open');
    });
});

$('#menuToggle').addEventListener('click', () => {
    $('#sidebar').classList.toggle('open');
});

// ===== RENDER FUNCTIONS =====
function renderGeneral() {
    const g = data.general;
    $('#companyName').value = g.companyName || '';
    $('#companyTagline').value = g.companyTagline || '';
    $('#globalPhone').value = g.phone || '';
    $('#globalEmail').value = g.email || '';
    $('#globalAddress').value = g.address || '';
    $('#socialFacebook').value = g.facebook || '';
    $('#socialInstagram').value = g.instagram || '';
    $('#socialLinkedin').value = g.linkedin || '';
    $('#socialWhatsapp').value = g.whatsapp || '';
}

function renderHero() {
    const container = $('#heroSlides');
    container.innerHTML = '';
    data.hero.forEach((slide, i) => {
        container.innerHTML += `
        <div class="item-card" data-index="${i}">
            <div class="item-card-header">
                <h4><span class="item-number">${i + 1}</span> 轮播图 ${i + 1}</h4>
                <button class="btn btn-remove" onclick="removeSlide(${i})"><i class="fas fa-trash"></i> 删除</button>
            </div>
            <div class="form-group">
                <label>背景图片 URL</label>
                <input type="text" value="${slide.image}" onchange="updateSlide(${i}, 'image', this.value)">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>副标题</label>
                    <input type="text" value="${slide.subtitle}" onchange="updateSlide(${i}, 'subtitle', this.value)">
                </div>
                <div class="form-group">
                    <label>标题（使用 &lt;br&gt; 换行）</label>
                    <input type="text" value="${slide.title}" onchange="updateSlide(${i}, 'title', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label>描述文字</label>
                <textarea rows="2" onchange="updateSlide(${i}, 'description', this.value)">${slide.description}</textarea>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>按钮 1 文字</label>
                    <input type="text" value="${slide.btn1Text}" onchange="updateSlide(${i}, 'btn1Text', this.value)">
                </div>
                <div class="form-group">
                    <label>按钮 1 链接</label>
                    <input type="text" value="${slide.btn1Link}" onchange="updateSlide(${i}, 'btn1Link', this.value)">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>按钮 2 文字</label>
                    <input type="text" value="${slide.btn2Text}" onchange="updateSlide(${i}, 'btn2Text', this.value)">
                </div>
                <div class="form-group">
                    <label>按钮 2 链接</label>
                    <input type="text" value="${slide.btn2Link}" onchange="updateSlide(${i}, 'btn2Link', this.value)">
                </div>
            </div>
        </div>`;
    });
}

function renderAbout() {
    const a = data.about;
    $('#aboutTitle').value = a.title || '';
    $('#aboutText1').value = a.text1 || '';
    $('#aboutText2').value = a.text2 || '';
    $('#aboutExpNumber').value = a.expNumber || '';
    $('#aboutExpText').value = a.expText || '';

    const container = $('#aboutFeatures');
    container.innerHTML = '';
    (a.features || []).forEach((f, i) => {
        container.innerHTML += `
        <div class="item-card" data-index="${i}">
            <div class="item-card-header">
                <h4><span class="item-number">${i + 1}</span> 特色 ${i + 1}</h4>
                <button class="btn btn-remove" onclick="removeFeature(${i})"><i class="fas fa-trash"></i> 删除</button>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>图标类名（Font Awesome）</label>
                    <input type="text" value="${f.icon}" onchange="updateFeature(${i}, 'icon', this.value)">
                </div>
                <div class="form-group">
                    <label>标题</label>
                    <input type="text" value="${f.title}" onchange="updateFeature(${i}, 'title', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label>描述</label>
                <input type="text" value="${f.desc}" onchange="updateFeature(${i}, 'desc', this.value)">
            </div>
        </div>`;
    });
}

function renderServices() {
    const container = $('#servicesList');
    container.innerHTML = '';
    data.services.forEach((s, i) => {
        container.innerHTML += `
        <div class="item-card" data-index="${i}">
            <div class="item-card-header">
                <h4><span class="item-number">${i + 1}</span> 服务 ${i + 1}</h4>
                <button class="btn btn-remove" onclick="removeService(${i})"><i class="fas fa-trash"></i> 删除</button>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>图标类名（Font Awesome）</label>
                    <input type="text" value="${s.icon}" onchange="updateService(${i}, 'icon', this.value)">
                </div>
                <div class="form-group">
                    <label>标题</label>
                    <input type="text" value="${s.title}" onchange="updateService(${i}, 'title', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label>描述</label>
                <textarea rows="2" onchange="updateService(${i}, 'desc', this.value)">${s.desc}</textarea>
            </div>
        </div>`;
    });
}

function renderProducts() {
    const container = $('#productsList');
    container.innerHTML = '';
    data.products.forEach((p, i) => {
        container.innerHTML += `
        <div class="item-card" data-index="${i}">
            <div class="item-card-header">
                <h4><span class="item-number">${i + 1}</span> 产品 ${i + 1}</h4>
                <button class="btn btn-remove" onclick="removeProduct(${i})"><i class="fas fa-trash"></i> 删除</button>
            </div>
            <div class="form-group">
                <label>图片 URL</label>
                <input type="text" value="${p.image}" onchange="updateProduct(${i}, 'image', this.value)">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>标题</label>
                    <input type="text" value="${p.title}" onchange="updateProduct(${i}, 'title', this.value)">
                </div>
                <div class="form-group">
                    <label>描述</label>
                    <input type="text" value="${p.desc}" onchange="updateProduct(${i}, 'desc', this.value)">
                </div>
            </div>
        </div>`;
    });
}

function renderFaq() {
    const container = $('#faqList');
    container.innerHTML = '';
    data.faq.forEach((f, i) => {
        container.innerHTML += `
        <div class="item-card" data-index="${i}">
            <div class="item-card-header">
                <h4><span class="item-number">${i + 1}</span> 问题 ${i + 1}</h4>
                <button class="btn btn-remove" onclick="removeFaq(${i})"><i class="fas fa-trash"></i> 删除</button>
            </div>
            <div class="form-group">
                <label>问题</label>
                <input type="text" value="${f.q}" onchange="updateFaq(${i}, 'q', this.value)">
            </div>
            <div class="form-group">
                <label>回答</label>
                <textarea rows="3" onchange="updateFaq(${i}, 'a', this.value)">${f.a}</textarea>
            </div>
        </div>`;
    });
}

function renderContact() {
    const c = data.contact;
    $('#contactTitle').value = c.title || '';
    $('#contactDesc').value = c.desc || '';
    $('#contactHours').value = c.hours || '';
}

function renderFooter() {
    const f = data.footer;
    $('#footerDesc').value = f.desc || '';
    $('#footerCopyright').value = f.copyright || '';
    $('#footerNewsletter').value = f.newsletter || '';
}

// ===== UPDATE FUNCTIONS =====
function updateSlide(i, key, val) { data.hero[i][key] = val; }
function removeSlide(i) { data.hero.splice(i, 1); renderHero(); }

function updateFeature(i, key, val) { data.about.features[i][key] = val; }
function removeFeature(i) { data.about.features.splice(i, 1); renderAbout(); }

function updateService(i, key, val) { data.services[i][key] = val; }
function removeService(i) { data.services.splice(i, 1); renderServices(); }

function updateProduct(i, key, val) { data.products[i][key] = val; }
function removeProduct(i) { data.products.splice(i, 1); renderProducts(); }

function updateFaq(i, key, val) { data.faq[i][key] = val; }
function removeFaq(i) { data.faq.splice(i, 1); renderFaq(); }

// ===== ADD FUNCTIONS =====
$('#addSlide').addEventListener('click', () => {
    data.hero.push({
        image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1920&q=80',
        subtitle: '新轮播图',
        title: '标题文字',
        description: '描述文字。',
        btn1Text: '按钮 1', btn1Link: '#',
        btn2Text: '按钮 2', btn2Link: '#'
    });
    renderHero();
});

$('#addFeature').addEventListener('click', () => {
    data.about.features.push({ icon: 'fas fa-star', title: '新特色', desc: '特色描述' });
    renderAbout();
});

$('#addService').addEventListener('click', () => {
    data.services.push({ icon: 'fas fa-star', title: '新服务', desc: '服务描述。' });
    renderServices();
});

$('#addProduct').addEventListener('click', () => {
    data.products.push({
        image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=500&q=80',
        title: '新产品',
        desc: '产品描述'
    });
    renderProducts();
});

$('#addFaq').addEventListener('click', () => {
    data.faq.push({ q: '新问题？', a: '回答内容。' });
    renderFaq();
});

// ===== COLLECT FORM DATA =====
function collectGeneral() {
    data.general.companyName = $('#companyName').value;
    data.general.companyTagline = $('#companyTagline').value;
    data.general.phone = $('#globalPhone').value;
    data.general.email = $('#globalEmail').value;
    data.general.address = $('#globalAddress').value;
    data.general.facebook = $('#socialFacebook').value;
    data.general.instagram = $('#socialInstagram').value;
    data.general.linkedin = $('#socialLinkedin').value;
    data.general.whatsapp = $('#socialWhatsapp').value;
}

function collectAbout() {
    data.about.title = $('#aboutTitle').value;
    data.about.text1 = $('#aboutText1').value;
    data.about.text2 = $('#aboutText2').value;
    data.about.expNumber = $('#aboutExpNumber').value;
    data.about.expText = $('#aboutExpText').value;
}

function collectContact() {
    data.contact.title = $('#contactTitle').value;
    data.contact.desc = $('#contactDesc').value;
    data.contact.hours = $('#contactHours').value;
}

function collectFooter() {
    data.footer.desc = $('#footerDesc').value;
    data.footer.copyright = $('#footerCopyright').value;
    data.footer.newsletter = $('#footerNewsletter').value;
}

// ===== SAVE =====
$('#saveBtn').addEventListener('click', () => {
    collectGeneral();
    collectAbout();
    collectContact();
    collectFooter();
    saveData(data);
    showToast('所有更改已保存！');
});

// ===== RESET =====
$('#resetBtn').addEventListener('click', () => {
    if (confirm('确定要重置所有数据吗？此操作不可撤销。')) {
        localStorage.removeItem(STORAGE_KEY);
        data = JSON.parse(JSON.stringify(DEFAULT_DATA));
        renderAll();
        showToast('已恢复默认数据！');
    }
});

// ===== RENDER ALL =====
function renderAll() {
    renderGeneral();
    renderHero();
    renderAbout();
    renderServices();
    renderProducts();
    renderFaq();
    renderContact();
    renderFooter();
}

renderAll();
