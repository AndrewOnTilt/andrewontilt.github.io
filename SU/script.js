const videoPlayer = document.getElementById('videoPlayer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

const videos = [
    'https://cdn.cizgifilmlerizle.com/getvid?evid=6WEXVY5eTLEFebP6cleAO3TBX4kn0g0_iEKKUk5Wt6JKXAPxNY7dyg6Wr_Md91lSKIjwYZYwQeZmRaa93S-del3e-FaEdUwvfvm5WRLP1ZOeAsxcsUQsRrQDygvujcf9lmPrOqPOmf6T99aHNw6aMWhm9pVrxLqe1bqY94ICYwrOip1oGctjXI4GlBo4hPTz96c87E2P4ZhCPlHGAGUv43QOsNgTDdkSNxIT_NwLXomMIG8q15h5wnLqFJ3nFxRgwmLVawWgaXzTL8tVOsNJWFhTj4iIo87db6M0jyB4ZSV5pDYo-y6fVR5pn0dYxK7kR6FkgEEyxG0GQm9B09ndYzHpXDDBtJUVczGvx_cYXCPnkdxxrv2Z5fK-WYfqGh-s18YTqSx48HzXXFRFtMNSzZ5zQ_t7VhvILje-LGpSJ_4',
    'https://cdn.cizgifilmlerizle.com/getvid?evid=6WEXVY5eTLEFebP6cleAO3TBX4kn0g0_iEKKUk5Wt6JKXAPxNY7dyg6Wr_Md91lSwqyjAObTr12ReDLyxL4kD1vPw3Di6yYIv0dTmfq-gP6zQ-iZKpocb8aLoovzqsfy2gnSm8gGN_33Zh6AAm4tNG09ng9vh1k71-F9TtZ0F3pq2aPpQr5kh0IZggVp-CDiuhNrm1fPnH7i3Xj85PK40ABmsGob4X392CW4kEYnCUtYNyijmWsJKupbUCUQW718fBtCvN65l6X7Yc7kRkpsMb_BgIybVC4Cp3DDfxgTshaI9M-YxgFwn1K8Cty14vL53Qc42upP8uW8sEUrYX7ELztttOdIMEfo_s2ycySWAm_hZJvW5VBrBRm1RhLgEilJXqLhUi2DcARFKNgSXUohyumXc5LcWSCAuMScoisn6x9-03gj1ggQgbdFsi1cyl8V', 
    'https://cdn.cizgifilmlerizle.com/getvid?evid=6WEXVY5eTLEFebP6cleAO3TBX4kn0g0_iEKKUk5Wt6JKXAPxNY7dyg6Wr_Md91lSstscWei4UMu2DzwxB2xv32QQNS6MxFguZ49MCpVJb47PLBPVpz5cHX1c9Sw9YxkxKLU72435iRns340ShL1cwARjuhGwZrD8qMqJfWQYM9mkHutmu_NoMrHYGbxv4WDNglC8Tb3Pxr2_CdD1NxqaiQpPro3WqdClOp_EWbWBZ9zYXSFtYxl_oSrByefwkrP2yZg-frxmZ6xEdbMFhhyo8RMmgvNnsyOq8yXdjsFPdsjo09rYW6GdMXVbCH6YYApBw5fq60fUYfMON3s7KC75jdT1Y_GecCXWpKO3O3KcEzW8H5xzcRNYEyYSvAePOau4GcjDdkTcG1vlVx4TB9pQIVt5dOoFbAjkV6iZJUtKY8_kIIVwls9qXrkewFbmHbGI',
    'https://cdn.cizgifilmlerizle.com/getvid?evid=6WEXVY5eTLEFebP6cleAO3TBX4kn0g0_iEKKUk5Wt6JKXAPxNY7dyg6Wr_Md91lSK6rRLoBwHBXv-iQ-xesFQokoFn2jZp0j13vBK5w5Y3-TMN9UZ0Pr0q9PlYxcBZUYTwfUq8vCI13jTptJgHTf87QBD-Lb96bJzJVW4S7OpBUhpS9H8vlKn8CN7q-wzg1hm8TSV_OJaxhnLvkUN8nM6eVbvl40Zy4QjPBeLQZim1xQ8I4O2qXhZeja69SThbRWbPzPUmM8SiRrOyLGwLkpgTyqPeME334ibXwbEZox0B0PrF_h-urZizJmtZ1LJ5oQFf8z98NcLaTGEiKmldMlWiETzFGnHxwBqjZWTVHLuN0HFFuuL1AcIg22kA-8qnRVbc_HlJmSxu0Qj1lfvc-qbImap6CoAVVEeo2c2bFGa6D3PqJFQDgUByDOiiZm96hM'
];
let currentVideoIndex = 0;


prevButton.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    videoPlayer.src = videos[currentVideoIndex];
    videoPlayer.play();
    playPauseButton.textContent = 'Pausa';
});

nextButton.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoPlayer.src = videos[currentVideoIndex];
    videoPlayer.play();
    playPauseButton.textContent = 'Pausa';
});
