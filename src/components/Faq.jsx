
                {/*d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"*/}
                {/*d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"*/}
                import faqData from '../AppData/faqData.jsx'
                import faqDataWithData from '../AppData/faqDataWithLink.jsx'
                const Faq=()=>{
                const featureData =()=>{
                /*	if(data.ask1 && dataanchorLink){
                         return <p className="text-gray-500 dark:text-gray-400">
                               {data.ask1}
                               <a
                                 href={data.anchorLink}
                                 className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                                 target="_blank"
                                 rel="noreferrer"
                                 >{data.anchorName}</a
                               >
                               {data.ask2}
                             </p>
                    }*/
                    return <p>=</p>
                }
                
                return(
                <>
                
                <section className="bg-white dark:bg-gray-900">
                  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                    <h2
                      className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
                    >
                      Frequently asked questions
                    </h2>
                    <div
                      className="grid border-t border-gray-200 pt-8 text-left md:grid-cols-2 md:gap-16 dark:border-gray-700"
                    >
                      <div>
                      {faqData.map((data)=>(
                
                          
                        <div className="mb-10">
                          <h3
                            className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white"
                          >
                            <svg
                              className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d = {data.d}
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            {data.question}
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            {data.information}
                          </p>
                        </div>
                      ))}
                      
                        {faqDataWithData.map((data,index,cb)=>(
                            
                        <div className="mb-10">
                          <h3
                            className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white"
                          >
                            <svg
                              className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d={data.d}
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            {data.question}
                          </h3>
                          {data.desc && <p className="text-gray-500 dark:text-gray-400">
                            {data.desc}            
                          </p>}
                          {data.secondParagraph && <p className="text-gray-500 dark:text-gray-400">
                          {data.secondParagraph}
                          </p>}
                          <p className="text-gray-500 dark:text-gray-400">
                            {data.ask1}
                            {data.anchorLink?<a
                              href={data.anchorLink}
                              className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                              target="_blank"
                              rel="noreferrer"
                              >{data.anchorName}</a
                            >:''}
                            {data.ask2&&data.ask2}
                          </p>
                          {data.ask3 && <p className="text-gray-500 dark:text-gray-400">
                              {data.ask3}
                             </p>}
                          
                        </div>
                        ))}
                        
                      </div>
                    </div>
                  </div>
                </section>
                </>
                )
                }
                export default Faq
                
