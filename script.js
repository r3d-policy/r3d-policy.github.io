// ===== Copy BibTeX =====
const copyBtn = document.getElementById('copyBibtex');
const bibtexCode = document.getElementById('bibtexCode');

if (copyBtn && bibtexCode) {
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(bibtexCode.textContent.trim()).then(() => {
            copyBtn.classList.add('copied');
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyBtn.classList.remove('copied');
                copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
            }, 2000);
        });
    });
}

// ===== Top video: let native height show by using height:auto =====
// The CSS already sets height:auto + max-height:55vh.
// Once the video metadata loads, the browser will render it at its natural aspect ratio.
// No extra JS needed beyond ensuring the video element loads correctly.
const topVideo = document.getElementById('topVideo');
if (topVideo) {
    topVideo.setAttribute('playsinline', '');
    topVideo.muted = true;
    topVideo.play().catch(() => { });
}

// ===== Autoplay-on-scroll for .autoplay-scroll videos =====
// These are gif-style (no controls). Play when entering viewport, pause when leaving.
const scrollVideos = document.querySelectorAll('video.autoplay-scroll');

if ('IntersectionObserver' in window && scrollVideos.length > 0) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const vid = entry.target;
                if (entry.isIntersecting) {
                    vid.play().catch(() => { });
                } else {
                    vid.pause();
                }
            });
        },
        {
            threshold: 0.25  // start playing when 25% of video is visible
        }
    );

    scrollVideos.forEach(vid => {
        vid.muted = true;
        vid.setAttribute('playsinline', '');
        observer.observe(vid);
    });
} else {
    // Fallback: autoplay immediately (muted)
    scrollVideos.forEach(vid => {
        vid.muted = true;
        vid.setAttribute('playsinline', '');
        vid.play().catch(() => { });
    });
}
window.addEventListener('load', () => {
    // Small delay to ensure layout is stable and let the user see the banner briefly
    setTimeout(() => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 2000);
});
