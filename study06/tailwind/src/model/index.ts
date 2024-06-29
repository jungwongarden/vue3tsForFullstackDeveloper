export interface Post {
    id: number;
    title: string;
    author: string;
    date: string;
    content: string;
}

export interface Product {
    id: number; 
    name: string;
    price: number; 
    description: string;
    image: string;
    image2: string;
}

export interface Qna {
    id: number; //글번호
    lev: number;    //질문(0), 답변(1)
    parno: number;  //질문 글번호(질문일 경우는 자기 자신의 글번호, 답변일 경우는 해당 질문의 글번호)
    title: string;  //제목(질문일 경우는 입력된 제목, 답변일 경우는 [Re]가 제목 앞에 붙음)
    author: string; //작성자의 아이디
    date: string;   //작성일시
    content: string;    //글 내용
}

export interface User {
    id: string; //아이디
    pw: string;  //비밀번호
    name: string; //이름
    email: string;  //이메일
    regdate: string;   //가입일시
}

export interface Dataroom {
    id: number; //자료번호
    title: string;
    content: string;
    author: string;
    resdate: string;
    dataurl: string;
}
