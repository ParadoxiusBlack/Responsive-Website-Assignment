/* 
Project:  Project 5-Personal Web Site-Visitor Form Validation-Refactor JS
Name: Connor Preece
Submitted: 12/2/2024
 
I declare that the following source code was written by me, or provided
by the instructor for this project. I understand that copying source
code from any other source, providing source code to another student, 
or leaving my code on a public web site constitutes cheating.
I acknowledge that If I am found in violation of this policy this may result
in a zero grade, a permanent record on file and possibly immediate failure of the class.
*/

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalVideo = document.getElementById('modal-video');
    const modalVideoSource = document.getElementById('modal-video-source');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.clickable').forEach(item => {
        item.addEventListener('click', function() {
            if (this.tagName === 'IMG') {
                modalImg.src = this.src;
                modalImg.style.display = 'block';
                modalVideo.style.display = 'none';
            } else if (this.tagName === 'VIDEO') {
                modalVideoSource.src = this.querySelector('source').src;
                modalVideo.load();
                modalVideo.style.display = 'block';
                modalImg.style.display = 'none';
            }
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
