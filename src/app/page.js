import Link from "next/link";


export default async function Home() {
  const newsData = ["news1", "news2", "news3", "news4", "news5"] 
  generateMetadata()
  return (
    <main >
       home new
       <ul>
        {newsData.map((val, i)=>{
          return(
            <li key={val}><Link href={`/${val}`}>{val}</Link></li>
          )
        })}
        {newsData.map((val, i)=>{
          return(
            <li key={i}><Link href={`/news/${val}/${i}`}>{val} {i}</Link></li>
          )
        })}
       </ul>
    </main>
  );
}

export  function generateMetadata(props){
  return{
      title:"home", 
      description: "this is description",
      openGraph: {
          title: 'this is open graph title for testing',
          description: 'Some description', 
          images: ['https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
        }
  }
}
