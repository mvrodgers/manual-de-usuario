document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const toc = document.getElementById("toc");

    headings.forEach(heading => {
        const link = document.createElement("a");
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        toc.appendChild(link);
    });
});