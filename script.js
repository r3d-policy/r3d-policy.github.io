document.addEventListener('DOMContentLoaded', () => {

    // ===== Copy BibTeX =====
    const copyBtn = document.getElementById('copyBibtex');
    const bibtexCode = document.getElementById('bibtexCode');

    if (copyBtn && bibtexCode) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(bibtexCode.textContent);
                copyBtn.classList.add('copied');
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';

                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
                }, 2000);
            } catch (err) {
                const range = document.createRange();
                range.selectNode(bibtexCode);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                document.execCommand('copy');
                window.getSelection().removeAllRanges();

                copyBtn.classList.add('copied');
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
                }, 2000);
            }
        });
    }

    // ===== Placeholder link handling =====
    const placeholderLinks = ['youtubeBtn', 'githubBtn', 'arxivBtn'];
    placeholderLinks.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                // Replace with actual URLs when available:
                // window.open('https://your-url-here', '_blank');
            });
        }
    });

    // ===== Autoplay videos =====
    const videos = document.querySelectorAll('.video-wrapper video');
    videos.forEach(video => {
        video.play().catch(() => {});
    });
});
