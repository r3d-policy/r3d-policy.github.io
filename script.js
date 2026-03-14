// ===== Intersection Observer for Scroll Animations =====
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.animate-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    animateElements.forEach(el => observer.observe(el));

    // ===== Floating Nav Visibility =====
    const nav = document.getElementById('floatingNav');
    const hero = document.getElementById('hero');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                nav.classList.add('visible');
            } else {
                nav.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.3
    });

    navObserver.observe(hero);

    // ===== Copy BibTeX =====
    const copyBtn = document.getElementById('copyBibtex');
    const bibtexCode = document.getElementById('bibtexCode');

    if (copyBtn && bibtexCode) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(bibtexCode.textContent);
                copyBtn.classList.add('copied');
                copyBtn.querySelector('span').textContent = 'Copied!';
                copyBtn.querySelector('i').className = 'fas fa-check';

                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyBtn.querySelector('span').textContent = 'Copy';
                    copyBtn.querySelector('i').className = 'fas fa-copy';
                }, 2000);
            } catch (err) {
                // Fallback for older browsers
                const range = document.createRange();
                range.selectNode(bibtexCode);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                document.execCommand('copy');
                window.getSelection().removeAllRanges();

                copyBtn.classList.add('copied');
                copyBtn.querySelector('span').textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyBtn.querySelector('span').textContent = 'Copy';
                }, 2000);
            }
        });
    }

    // ===== Smooth Active Nav Link Highlighting =====
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-links a');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.style.color = '';
                    if (link.getAttribute('href') === `#${id}`) {
                        link.style.color = 'var(--text-primary)';
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-80px 0px -40% 0px'
    });

    sections.forEach(section => sectionObserver.observe(section));

    // ===== Placeholder link handling =====
    const placeholderLinks = [
        'paperBtn', 'youtubeBtn', 'githubBtn', 'arxivBtn',
        'footerPaper', 'footerYoutube', 'footerGithub'
    ];

    placeholderLinks.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                // You can replace these with actual URLs later:
                // For example: window.open('https://arxiv.org/abs/XXXX', '_blank');
            });
        }
    });

    // ===== Video play on hover (desktop enhancement) =====
    const videos = document.querySelectorAll('.video-wrapper video');
    videos.forEach(video => {
        video.play().catch(() => {
            // Autoplay may be blocked; that's fine
        });
    });
});
