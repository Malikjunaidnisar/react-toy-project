
              {/*d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"*/}
              import featureData from '../AppData/featureData.jsx'

              const FeatureSection =()=>{
              
              return(
              <>	
              
              <section className="bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                  <div className="mb-8 max-w-screen-md lg:mb-16">
                    <h2
                      className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
                    >
                      Designed for business teams like yours
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                      Here at Flowbite we focus on markets where technology, innovation, and
                      capital can unlock long-term value and drive economic growth.
                    </p>
                  </div>
                  <div
                    className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3"
                  >
                  {featureData.map((feature,index)=>(
                      
                    <div>
                      <div
                        className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12"
                      >
                        <svg
                          className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d={feature.d}
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="mb-2 text-xl font-bold dark:text-white">{feature.heading}</h3>
                      <p className="text-gray-500 dark:text-gray-400">{feature.description}
                      </p>
                    </div>
                  ))}
                  </div>
                </div>
              </section>
              </>
              )
              }
              export default FeatureSection
              
