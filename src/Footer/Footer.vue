<template>
  <div style="border-top: 1px solid #d9d9d9; background: #fafafa;">
    <footer class="footer gridOn">
      <div class="footer-grid">
        <!-- Brand Section -->
        <div class="footer-brand">
          <h2 class="brand-name">Artinery</h2>
          <p class="brand-desc">
            문화와 예술, 그리고 당신의 일상이 만나는 곳. 다양한 정보부터 예매, 생생한 후기까지 모두 경험하세요.
          </p>
        </div>

        <!-- Menu Section -->
        <div class="footer-menu">
          <h3>{{ menuTitle }}</h3>
          <ul>
            <li v-for="link in menuLinks" :key="link.text">
              <a :href="link.href">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <!-- Community Section -->
        <div class="footer-community">
          <h3>{{ communityTitle }}</h3>
          <ul>
            <li v-for="link in communityLinks" :key="link.text">
              <a :href="link.href">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <!-- Newsletter & Social -->
        <div class="footer-connect">
          <h3>Stay Connected</h3>
          <form class="newsletter-form" @submit.prevent="subscribe">
            <input type="email" v-model="email" placeholder="Enter your email" aria-label="Email address" />
            <button type="submit">Subscribe</button>
          </form>
          <div class="social-icons">
            <a v-for="social in socialLinks" :key="social.name" :href="social.href" target="_blank"
              rel="noopener noreferrer" :aria-label="social.name">
              <i :class="social.iconClass"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Legal Links -->
      <div class="footer-legal">
        <a v-for="(link, i) in legalLinks" :key="link.text" :href="link.href">
          {{ link.text }}
        </a>
        <span v-if="i < legalLinks.length - 1"> | </span>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Atinery. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Title recommendation: '탐색' for primary menu
const menuTitle = '탐색'
const menuLinks = ref([
  { text: '홈', href: '/' },
  { text: '지역별 전시', href: '/exhibitions' },
  { text: '핫한 전시', href: '/hot' },
  { text: '큐레이션', href: '/curation' },
  { text: '오픈 예정', href: '/upcoming' }
])

const communityTitle = '커뮤니티'
const communityLinks = ref([
  { text: '공지사항', href: '/notice' },
  { text: '추천', href: '/recommend' },
  { text: '후기', href: '/reviews' },
  { text: '자유게시판', href: '/board' },
  { text: 'Q&A', href: '/qna' }
])

// Legal links without section title
const legalLinks = ref([
  { text: '이용약관', href: '/terms' },
  { text: '개인정보처리방침', href: '/privacy' }
])

// Social links
const socialLinks = ref([
  { name: 'Facebook', href: 'https://facebook.com/atinery', iconClass: 'fab fa-facebook-f' },
  { name: 'Instagram', href: 'https://instagram.com/atinery', iconClass: 'fab fa-instagram' },
  { name: 'Twitter', href: 'https://twitter.com/atinery', iconClass: 'fab fa-twitter' }
])

const email = ref('')
const subscribe = () => {
  if (email.value) {
    console.log(`Subscribed: ${email.value}`)
    email.value = ''
  }
}
</script>

<style scoped>
.footer {
  padding: 40px 20px 16px 20px;
  color: #767676;

}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 16px;
}

/* Brand Section */
.brand-name,
.footer-menu h3,
.footer-community h3,
.footer-connect h3 {
  color: #222;
  margin-bottom: 16px;
}

.brand-desc {
  font-size: 14px;
  line-height: 1.6;
}

/* Menu & Community lists */
.footer-menu ul,
.footer-community ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-menu a,
.footer-community a {
  display: block;
  margin-bottom: 8px;
  text-decoration: none;
  color: #767676;
  font-size: 14px;
}

.footer-menu a:hover,
.footer-community a:hover {
  color: #222;
}

/* Newsletter hidden on mobile */
@media (max-width: 1000px) {
  .footer-connect {
    display: none;
  }

  /* Stack only menu & community sections full width */
  .footer-grid {
    grid-template-columns: 1fr;
  }
}

.newsletter-form {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.newsletter-form input {
  flex: 1 1 140px;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
  color: #222;
}

.newsletter-form button {
  padding: 10px 20px;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.newsletter-form button:hover {
  background: #444;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-icons a {
  font-size: 18px;
  color: #767676;
}

.social-icons a:hover {
  color: #222;
}

/* Legal links */
.footer-legal {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 16px;
}

.footer-legal a {
  color: #767676;
  font-size: 13px;
  text-decoration: none;
  margin: 0 12px;
}

.footer-legal a:hover {
  color: #222;
}

.footer-bottom {
  text-align: center;
  font-size: 13px;
  border-top: 1px solid #e0e0e0;
  padding-top: 16px;
  color: #767676;
}
</style>
