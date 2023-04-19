import {useState} from "react";

const FindHashTag = () => {
    const [contents, setContents] = useState('');
    const [hashTag, setHashTag] = useState('');


    const handleEditorChange = (contents) => {
        setContents(contents);

        // 해시태그를 찾기 위한 정규식
        const hashTagRegex = /(#[\wㄱ-ㅎㅏ-ㅣ가-힣]+)/g;

        // 해시태그를 포함한 HTML을 텍스트로 변환
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(contents, 'text/html');
        const textContent = parsedHtml.body.textContent;
        // 텍스트에서 해시태그를 찾음
        const inputHashTags = textContent.match(hashTagRegex);

        if (inputHashTags) {
            // 입력한 해시태그를 공백으로 구분된 문자열로 저장
            setHashTag(inputHashTags.join(' '));
        } else {
            // 해시태그가 없는 경우 hashTag를 빈 문자열로 설정
            setHashTag('');
        }
    };
}
export default FindHashTag;