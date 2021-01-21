
export default [{
  title: "是否做过", // 暂时这个功能没实现
  dataIndex: "accepted",
  key: "accepted",
  customRender: ({text}: {text: boolean}) => {
    if(text === true){
      return "做过通过了"
    }else if (text === false) {
      return "做过没通过"
    } else {
      return "NO"
    }
  }
},
{
  title: "#",
  dataIndex: "id",
  key: "id"
},
{
  title: "题名",
  dataIndex: "title",
  key: "title",
  ellipsis: true,
  customRender: ({text, record}: {text: string; record: {id: number}}): JSX.Element => {
    const src: string = "/detail?id="+ record.id;
    return (<a href={src}>{text}</a>)
  }
},
{
  title: "难度",
  dataIndex: "difficultyCode",
  key: "difficultyCode",
  customRender: ({text}: {text: number}): string => {
    switch (text) {
      case 0:
        return 'easy';
      case 1:
        return 'medium';
      default:
          return 'hard';
    }
  }
},
// {
//   title: "分类",
//   dataIndex: "topicTags",
//   key: "topicTags",
//   customRender: ({text}: {text: string[]}): string => {
//     let str = ""
//     text.forEach(item => {
//       str += item+" ";
//     })
//     return str;
//   }
// }
]