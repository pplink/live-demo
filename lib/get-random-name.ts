const name1 = ['작은', '귀여운', '예쁜', '잘생긴', '착한', '용감한', '사나운', '재밌는', '똑똑한', '친절한',
  '바쁜', '한가한', '여유로운', '도전적인'];
const name2 = ['고양이', '강아지', '곰돌이', '사자', '호랑이', '흑우', '염소', '송아지', '얼룩 송아지', '얼룩말',
  '조랑말', '당나귀', '침팬지', '오랑우탄'];
export function getRandomName(): string {
  return name1[Math.floor(Math.random() * name1.length)]
    + ' '
    + name2[Math.floor(Math.random() * name2.length)];
}