/**
 * Don't Wait Until Midnight - UNO First-Year Survival Guide
 * Author: Justin Blue | CIST 1010
 * Clean, lightweight vanilla JS for interactive classroom walkthrough & accessibility
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');

  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', () => {
      const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
      mobileBtn.setAttribute('aria-expanded', String(!isExpanded));
      mainNav.classList.toggle('is-open');
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (event) => {
      if (!mainNav.contains(event.target) && !mobileBtn.contains(event.target) && mainNav.classList.contains('is-open')) {
        mainNav.classList.remove('is-open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. Classroom Projector Mode Toggle
  const projectorBtn = document.getElementById('projectorToggle');
  if (projectorBtn) {
    projectorBtn.addEventListener('click', () => {
      const isProjector = document.body.classList.toggle('projector-mode');
      projectorBtn.setAttribute('aria-pressed', String(isProjector));
      const statusSpan = projectorBtn.querySelector('.projector-status');
      if (statusSpan) {
        statusSpan.textContent = isProjector ? 'ON' : 'OFF';
      }
    });
  }

  // 3. Back to Top Button
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 4. Keyboard Shortcuts for Walkthrough Navigation (Left/Right Arrow keys)
  document.addEventListener('keydown', (e) => {
    // Only trigger if not typing inside an input/textarea
    if (['input', 'textarea', 'select'].includes(document.activeElement.tagName.toLowerCase())) {
      return;
    }

    if (e.key === 'ArrowRight') {
      const nextBtn = document.querySelector('.walkthrough-btn.next');
      if (nextBtn) {
        window.location.href = nextBtn.getAttribute('href');
      }
    } else if (e.key === 'ArrowLeft') {
      const prevBtn = document.querySelector('.walkthrough-btn.prev');
      if (prevBtn) {
        window.location.href = prevBtn.getAttribute('href');
      }
    }
  });
});
