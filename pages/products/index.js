import Groups from "../../components/ui/groups";

function ProductsPage(props){

  return (
    <Groups groups={props.groups} />
  )
}

export async function getStaticProps(){
  const groups = [
    {
      title: 'Snowboards',
      image: '/images/snowboards.webp'  
    },
    {
      title: 'Clothes',
      image: '/images/clothes.jpeg'  
    },
    {
      title: 'Accessories',
      image: '/images/accessories.jpeg'  
    },
  
  ]
  return {
    props : {
      groups: groups
    }
  }
}

export default ProductsPage;