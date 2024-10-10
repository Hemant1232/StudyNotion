import React, { useEffect, useState } from "react";
import { apiConnector } from "../services/apiConnector";
import { categories } from "../services/apis";
import { useParams } from "react-router-dom";
import { getCatalogaPageData } from "../services/operations/pageAndComponentData";
import { useDispatch } from "react-redux";
import CourseSlider from "../components/core/Catalog/CourseSlider";
import CatalogCard from '../components/core/Catalog/CatalogCard'

const Catalog = () => {
  const Catalog = useParams();
  const dispatch = useDispatch();
  const [desc, setDesc] = useState([]);
  const [categoryID, setCategoryID] = useState(null);
  const [activeOption, setActiveOption] = useState(1);
  const [catalogPageData, setCatalogPageData] = useState(null);

  const fetchSublinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      const category_id = result?.data?.data.filter(
        (item) => item.name === Catalog.catalog
      )[0]._id;
      setCategoryID(category_id);

      setDesc(
        result.data.data.filter((item) => item.name === Catalog.catalog)[0]
      );
     
    } catch (error) {
      console.log("could not fetch sublinks");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSublinks();
  }, [Catalog]);

  useEffect(() => {
    const fetchCatalogPageData = async () => {
      const result = await getCatalogaPageData(categoryID, dispatch);
      console.log("result", result)
      setCatalogPageData(result);
    };
    if (categoryID) {
      fetchCatalogPageData();
    }
  }, [categoryID]);

  return (
    <div className="text-white">
     <div className=' box-content bg-richblack-800 px-4'>
      <div className='mx-auto flex min-h-[260px]  flex-col justify-center gap-4 '>
        <p className='text-sm text-richblack-300'>Home / Catalog / <span className='text-yellow-25'>{Catalog.catalog}</span> </p>
        <p className='text-3xl text-richblack-5'>{Catalog?.catalog}</p>
        <p className='max-w-[870px] text-richblack-200'>
          {desc?.description}
        </p>
      </div>
      </div>

      <div className=' mx-auto box-content w-full max-w-maxContentTab px-2 py-12 lg:max-w-maxContent'>
        <h2 className='Courses to get you started'>
        Courses to get you started
        </h2>
        <div className='my-4 flex border-b border-b-richblack-600 text-sm'>
          <button onClick={()=>{setActiveOption(1)}}  className={activeOption===1? `px-4 py-2 border-b border-b-yellow-25 text-yellow-25 cursor-pointer`:`px-4 py-2 text-richblack-50 cursor-pointer` }>Most Populer</button>
          <button onClick={()=>{setActiveOption(2)}} className={activeOption===1?'px-4 py-2 text-richblack-50 cursor-pointer':'px-4 py-2 border-b border-b-yellow-25 text-yellow-25 cursor-pointer'}>New</button>
        </div>
        <CourseSlider Courses={catalogPageData?.selectedCourses}/>        
      </div>

      <div className=' mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent'>
        <h2 className='section_heading mb-6 md:text-3xl text-xl'>
          Similar to {Catalog.catalog}
        </h2>
        <CourseSlider Courses={catalogPageData?.differentCourses}/>
      </div>

      <div className=' mx-auto box-content w-full max-w-maxContentTab px-2 py-12 lg:max-w-maxContent'>
        <h2 className='section_heading mb-6 md:text-3xl text-xl'>
          Frequently BoughtTogether
          </h2>
          <div className='grid grid-cols-2 gap-3 lg:gap-6 lg:grid-cols-2 pr-4'>
            {
              catalogPageData?.mostSellingCourses?.map((item,index)=>(
                <CatalogCard key={index} course={item} Height={"h-[100px] lg:h-[400px]"} />
              ))
            }
          </div>
      </div>

    </div>
  );
};

export default Catalog;
