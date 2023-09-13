import React from "react";

import { Button, Img, PagerIndicator, Text } from "components";

const CashApp1Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-agrandir items-center justify-start mx-auto pb-[3px] w-full">
        <div className="h-[1442px] md:h-[2305px] sm:h-[846px] md:px-5 relative w-full">
          <div className="absolute h-[1085px] md:h-[2305px] sm:h-[846px] inset-x-[0] mx-auto top-[0] w-full">
            <div className="absolute bg-black-900 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-end justify-start mx-auto p-[18px] top-[0] w-full">
              <Img
                className="h-11 mb-[614px] md:ml-[0] ml-[42px]"
                src="images/img_alarm.svg"
                alt="alarm"
              />
              <div className="flex md:flex-1 md:flex-col flex-row gap-5 items-center justify-start mb-[624px] md:ml-[0] ml-[210px] md:mt-0 mt-4 w-auto md:w-full">
                <a
                  href="javascript:"
                  className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
                >
                  <Text size="txtAgrandirWideHeavy12">Sign In</Text>
                </a>
                <Text
                  className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
                  size="txtAgrandirWideHeavy12"
                >
                  Legal
                </Text>
                <Text
                  className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
                  size="txtAgrandirWideHeavy12"
                >
                  Licenses
                </Text>
                <Text
                  className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
                  size="txtAgrandirWideHeavy12"
                >
                  Security
                </Text>
                <a
                  href="javascript:"
                  className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
                >
                  <Text size="txtAgrandirWideHeavy12">Careers</Text>
                </a>
                <Text
                  className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
                  size="txtAgrandirWideHeavy12"
                >
                  Press
                </Text>
                <a
                  href="javascript:"
                  className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
                >
                  <Text size="txtAgrandirWideHeavy12">Support</Text>
                </a>
                <Text
                  className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
                  size="txtAgrandirWideHeavy12"
                >
                  Status
                </Text>
                <Text
                  className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
                  size="txtAgrandirWideHeavy12"
                >
                  Codeblog
                </Text>
              </div>
              <Img
                className="h-9 mb-[616px] md:ml-[0] ml-[173px] md:mt-0 mt-[5px] w-16"
                src="images/img_eyebutton.svg"
                alt="eyebutton"
              />
            </div>
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto py-0.5 w-full">
              <div className="h-[692px] md:h-[842px] mb-[389px] relative w-full">
                <div className="md:h-[453px] h-[692px] m-auto w-full">
                  <div
                    className="absolute bg-cover bg-no-repeat md:h-[453px] h-[690px] inset-[0] justify-center m-auto p-12 md:px-10 sm:px-5 w-full"
                    style={{ backgroundImage: "url('images/img_group9.png')" }}
                  >
                    <div className="absolute bottom-[10%] md:h-[453px] h-[483px] left-[15%] w-3/5 md:w-full">
                      <div className="absolute h-[453px] right-[0] top-[0] w-[85%] md:w-full">
                        <Text
                          className="absolute inset-x-[0] mx-auto md:text-5xl text-[193px] text-center text-white-A700 top-[2%] tracking-[0.50px] uppercase w-max"
                          size="txtAgrandirWideHeavy193"
                        >
                          CASh
                        </Text>
                        <Img
                          className="absolute h-[453px] inset-[0] justify-center m-auto object-cover w-[55%]"
                          src="images/img_introphone1.png"
                          alt="introphoneOne"
                        />
                      </div>
                      <Text
                        className="absolute bottom-[14%] right-[10%] md:text-5xl text-[193px] text-center text-white-A700 tracking-[0.50px] uppercase"
                        size="txtAgrandirWideHeavy193"
                      >
                        APP
                      </Text>
                      <Img
                        className="absolute bottom-[0] h-44 left-[0] object-cover w-[24%]"
                        src="images/img_introcubes1.png"
                        alt="introcubesOne"
                      />
                    </div>
                    <Img
                      className="absolute h-[73px] left-[17%] object-cover top-[7%] w-[74px]"
                      src="images/img_introcube1.png"
                      alt="introcubeOne"
                    />
                    <Img
                      className="absolute h-[260px] object-cover right-[10%] top-[7%] w-[15%]"
                      src="images/img_introstairs1.png"
                      alt="introstairsOne"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[244px] object-cover right-[19%] w-[21%]"
                    src="images/img_intropillar1.png"
                    alt="intropillarOne"
                  />
                </div>
                <div className="absolute bottom-[3%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto w-[92%]">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <div className="flex flex-row gap-5 items-center justify-start w-auto">
                      <Button
                        className="border border-solid border-white-A700 cursor-pointer flex items-center justify-center min-w-[170px]"
                        leftIcon={
                          <div className="mr-[13px] bg-green-A700">
                            <Img src="images/img_close.svg" alt="close" />
                          </div>
                        }
                      >
                        <div className="font-extrabold text-center text-xs tracking-[0.50px] uppercase">
                          APP STORE
                        </div>
                      </Button>
                      <Button
                        className="border border-solid border-white-A700 cursor-pointer flex items-center justify-center min-w-[170px]"
                        leftIcon={
                          <div className="mr-[17px] bg-green-A700">
                            <Img src="images/img_vector.svg" alt="Vector" />
                          </div>
                        }
                      >
                        <div className="font-extrabold text-center text-xs tracking-[0.50px] uppercase">
                          GOOGLE PLAY
                        </div>
                      </Button>
                    </div>
                  </div>
                  <Img
                    className="h-[30px] md:ml-[0] ml-[253px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                  <div className="flex flex-col font-mulish items-center justify-start md:ml-[0] ml-[87px] w-auto">
                    <Text
                      className="leading-[13.00px] text-[10px] text-gray-400"
                      size="txtMulishBold10"
                    >
                      <>
                        Brokerage services by Cash App Investing LLC, member
                        FINRA / SIPC.
                        <br />
                        See our BrokerCheck. Investing involves risk; you may
                        lose money. Bitcoin trading offered by Cash App. Cash
                        App Investing does not trade bitcoin and Cash App is not
                        a member of FINRA or SIPC. Cash App facilitates banking
                        services through Sutton Bank and Lincoln Savings Bank,
                        Members FDIC.
                      </>
                    </Text>
                  </div>
                  <PagerIndicator
                    className="flex gap-[30px] h-6 items-center justify-start md:ml-[0] ml-[35px] w-[126px]"
                    count={3}
                    activeCss="inline-block cursor-pointer h-6 bg-white-A700 w-6"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer h-[17px] bg-white-A700 w-[21px]"
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray-100 bottom-[0] md:h-[498px] sm:h-[626px] h-[750px] inset-x-[0] mx-auto pt-[116px] w-full">
            <div className="absolute bottom-[3%] md:h-[498px] h-[612px] sm:h-[626px] inset-x-[0] mx-auto w-full">
              <div className="md:h-[498px] h-[612px] sm:h-[626px] m-auto w-full">
                <div className="md:h-[498px] h-[612px] m-auto w-full">
                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                    <div className="flex flex-col gap-[58px] justify-start w-full">
                      <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[236px]">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-green-A700"
                          size="txtAgrandirGrandHeavy40"
                        >
                          Payments
                        </Text>
                        <Text
                          className="leading-[22.00px] text-base text-black-900 tracking-[0.30px]"
                          size="txtMulishRegular16"
                        >
                          <>
                            Send and receive money with anyone, donate to an
                            important cause, or tip professionals. <br />
                            Just enter a $cashtag, phone number, or <br />
                            scan their QR code to pay.
                          </>
                        </Text>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[295px] items-start justify-end p-[37px] sm:px-5 w-full"
                        style={{
                          backgroundImage: "url('images/img_group14.svg')",
                        }}
                      >
                        <Img
                          className="h-[131px] md:h-auto md:ml-[0] ml-[221px] mt-[89px] object-cover w-[11%]"
                          src="images/img_paymentspillarsmall.png"
                          alt="paymentspillars"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[431px] inset-x-[0] mx-auto object-cover top-[0] w-[55%]"
                    src="images/img_paymentsphone1.png"
                    alt="paymentsphoneOne"
                  />
                </div>
                <div className="absolute bottom-[4%] h-[497px] sm:h-[626px] right-[0] w-[59%] md:w-full">
                  <Img
                    className="h-[497px] m-auto object-cover w-full"
                    src="images/img_paymentscolumn.png"
                    alt="paymentscolumn"
                  />
                  <div className="absolute bottom-[7%] flex sm:flex-col flex-row sm:gap-10 items-start justify-between left-[8%] w-[65%]">
                    <Img
                      className="h-[333px] md:h-auto sm:mt-0 mt-[5px] object-cover"
                      src="images/img_paymentspillarlarge.png"
                      alt="paymentspillarl"
                    />
                    <Img
                      className="h-[253px] md:h-auto object-cover"
                      src="images/img_paymentspillarmedium.png"
                      alt="paymentspillarm"
                    />
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[253px] left-[11%] object-cover w-[13%]"
                  src="images/img_paymentspillarmedium.png"
                  alt="paymentspillarm_One"
                />
              </div>
              <Img
                className="absolute bottom-[2%] h-[253px] left-[37%] object-cover w-[13%]"
                src="images/img_paymentspillarmedium.png"
                alt="paymentspillarm_Two"
              />
            </div>
            <Img
              className="absolute bottom-[0] h-[184px] object-cover right-[39%] w-[13%]"
              src="images/img_paymentspillarmedium.png"
              alt="paymentspillarm_Three"
            />
            <Img
              className="absolute bottom-[0] h-[401px] left-[0] object-cover w-[14%]"
              src="images/img_paymentscolumn_401x187.png"
              alt="paymentscolumn_One"
            />
            <Img
              className="absolute bottom-[0] h-[423px] inset-x-[0] mx-auto object-cover w-3/5"
              src="images/img_paymentscolumn_423x810.png"
              alt="paymentscolumn_Two"
            />
          </div>
        </div>
        <div className="bg-green-A700 md:h-[407px] sm:h-[640px] h-[750px] pr-[68px] md:px-5 relative w-full">
          <div className="md:h-[407px] sm:h-[640px] h-[750px] my-auto w-[96%] md:w-full">
            <div className="absolute bottom-[8%] md:h-[407px] h-[521px] sm:h-[640px] right-[0] w-[73%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[186px] h-full justify-start m-auto w-full">
                <Img
                  className="h-[166px] md:h-auto object-cover w-[29%]"
                  src="images/img_bankingtrack1.png"
                  alt="bankingtrackOne"
                />
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[85px] items-start justify-end md:ml-[0] ml-[499px] w-[48%] md:w-full">
                  <Img
                    className="h-[139px] md:h-auto mb-[30px] object-cover w-[54%] sm:w-full"
                    src="images/img_bankingcubes.png"
                    alt="bankingcubes"
                  />
                  <Img
                    className="h-[79px] md:h-auto sm:mt-0 mt-[90px] object-cover w-[27%] sm:w-full"
                    src="images/img_bankingmonster.png"
                    alt="bankingmonster"
                  />
                </div>
              </div>
              <Img
                className="absolute h-[407px] left-[16%] object-cover top-[1%] w-[38%]"
                src="images/img_bankingphone.png"
                alt="bankingphone"
              />
            </div>
            <div className="absolute flex sm:flex-col flex-row sm:gap-10 h-max inset-y-[0] items-start justify-between my-auto right-[4%] w-[35%]">
              <Img
                className="h-[187px] md:h-auto object-cover"
                src="images/img_bankingramp1.png"
                alt="bankingrampOne"
              />
              <Img
                className="h-[247px] md:h-auto sm:mt-0 mt-[70px] object-cover"
                src="images/img_bankingstairs1.png"
                alt="bankingstairsOne"
              />
            </div>
            <Img
              className="absolute bottom-[6%] h-[194px] left-[12%] object-cover w-[24%]"
              src="images/img_bankingramp2.png"
              alt="bankingrampTwo"
            />
            <Img
              className="absolute bottom-[15%] h-[222px] left-[4%] object-cover w-[7%]"
              src="images/img_bankingstairs2.png"
              alt="bankingstairsTwo"
            />
            <Img
              className="absolute h-40 object-cover right-[8%] top-[2%] w-1/5"
              src="images/img_bankingtrack2.png"
              alt="bankingtrackTwo"
            />
            <Img
              className="absolute bottom-[0] h-[122px] left-[38%] object-cover w-[12%]"
              src="images/img_bankingtube.png"
              alt="bankingtube"
            />
            <Img
              className="absolute h-[159px] left-[0] object-cover top-[0] w-1/4"
              src="images/img_bankinghole.png"
              alt="bankinghole"
            />
          </div>
          <Img
            className="absolute bottom-[0] h-11 object-cover right-[19%] w-[28%]"
            src="images/img_bankinghole_44x380.png"
            alt="bankinghole_One"
          />
          <Img
            className="absolute h-[199px] left-[5%] object-cover top-[14%] w-[10%]"
            src="images/img_bankingcolumn.png"
            alt="bankingcolumn"
          />
          <div className="absolute flex flex-col gap-2 h-max inset-y-[0] items-start justify-start left-[16%] my-auto">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
              size="txtAgrandirGrandHeavy40WhiteA700"
            >
              Banking
            </Text>
            <Text
              className="leading-[22.00px] text-base text-black-900 tracking-[0.30px]"
              size="txtMulishRegular16"
            >
              <>
                Receive your paycheck, tax returns, and other direct deposits up
                to two days early using your Cash App routing <br />
                and account number.
              </>
            </Text>
          </div>
        </div>
        <div className="bg-black-900 md:h-[1773px] h-[750px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-[58px] items-end justify-between w-full">
              <Img
                className="h-[588px] md:h-auto md:mt-0 mt-[162px] object-cover"
                src="images/img_booststairs2.png"
                alt="booststairsTwo"
              />
              <div className="md:h-[1127px] h-[750px] relative w-[69%] md:w-full">
                <Img
                  className="h-[750px] m-auto object-cover w-full"
                  src="images/img_booststairs1.png"
                  alt="booststairsOne"
                />
                <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-y-[0] items-start justify-start my-auto right-[2%] w-[85%]">
                  <Img
                    className="h-[508px] sm:h-auto md:mt-0 mt-[57px] object-cover w-[32%] md:w-full"
                    src="images/img_boostphone.png"
                    alt="boostphone"
                  />
                  <Img
                    className="h-[92px] sm:h-auto md:ml-[0] ml-[74px] md:mt-0 mt-[297px] object-cover w-[9%] md:w-full"
                    src="images/img_boostburger.png"
                    alt="boostburger"
                  />
                  <div className="flex flex-col md:gap-10 gap-[188px] items-center justify-start ml-6 md:ml-[0] md:mt-0 mt-[120px] w-[11%] md:w-full">
                    <Img
                      className="h-[134px] md:h-auto object-cover w-[98%]"
                      src="images/img_boostcard.png"
                      alt="boostcard"
                    />
                    <Img
                      className="h-[100px] md:h-auto object-cover w-[98%]"
                      src="images/img_boostcoffee.png"
                      alt="boostcoffee"
                    />
                  </div>
                  <Img
                    className="h-[93px] sm:h-auto md:ml-[0] ml-[30px] object-cover w-[10%] md:w-full"
                    src="images/img_boosthand.png"
                    alt="boosthand"
                  />
                  <Img
                    className="h-20 sm:h-auto md:ml-[0] ml-[83px] md:mt-0 mt-[310px] object-cover w-[13%] md:w-full"
                    src="images/img_boostshoe.png"
                    alt="boostshoe"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col gap-3.5 items-start justify-start left-[15%] pb-4 pr-4 top-[30%]">
            <Text
              className="leading-[40.00px] sm:text-4xl md:text-[38px] text-[40px] text-green-A700"
              size="txtAgrandirGrandHeavy40"
            >
              <>
                Cash Card
                <br />& Boost
              </>
            </Text>
            <Text
              className="leading-[22.00px] mb-[5px] text-base text-white-A700 tracking-[0.30px] w-full"
              size="txtMulishRegular16WhiteA700"
            >
              The Cash Card is a free, customizable debit card that lets you pay
              online and in stores. It’s the only way to get Boosts—instant
              discounts that work at places where you want to spend.
            </Text>
          </div>
        </div>
        <footer className="bg-green-A700 flex items-center justify-center md:px-5 w-full">
          <div className="flex md:h-[1112px] h-[750px] sm:h-[879px] justify-end relative w-full">
            <div className="bg-white-A700 md:h-[297px] h-[298px] mt-auto mx-auto w-full">
              <Img
                className="absolute h-[297px] inset-[0] justify-center m-auto object-cover md:w-full"
                src="images/img_group.png"
                alt="group"
              />
              <Img
                className="absolute h-[268px] object-cover right-[0] top-[0] w-[30%]"
                src="images/img_investinggraph3.png"
                alt="investinggraphThree"
              />
            </div>
            <div
              className="absolute bg-cover bg-no-repeat md:h-[1112px] h-[750px] sm:h-[879px] inset-[0] justify-center m-auto py-[5px] w-full"
              style={{ backgroundImage: "url('images/img_group16.svg')" }}
            >
              <div className="absolute bottom-[4%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <Img
                    className="h-[283px] md:h-auto sm:mt-0 mt-[313px] object-cover"
                    src="images/img_investinggraph1.png"
                    alt="investinggraphOne"
                  />
                  <Img
                    className="h-[411px] md:h-auto mb-[185px] object-cover"
                    src="images/img_investinggraph2.png"
                    alt="investinggraphTwo"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col md:gap-10 gap-[76px] h-max inset-[0] items-center justify-center m-auto w-[87%]">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtAgrandirGrandHeavy40WhiteA700"
                >
                  Investing
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex flex-col gap-[15px] items-start justify-start md:mt-0 mt-9 pt-[3px]">
                    <Text
                      className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                      size="txtAgrandirGrandHeavy22"
                    >
                      Stocks
                    </Text>
                    <Text
                      className="leading-[22.00px] text-base text-black-900 tracking-[0.30px] w-full"
                      size="txtMulishRegular16"
                    >
                      Whether you’re an expert or just getting started, Cash App
                      is the fastest and most accessible way to invest in
                      stocks. Start now with as little as $1.
                    </Text>
                  </div>
                  <Img
                    className="md:flex-1 h-[344px] sm:h-auto md:ml-[0] ml-[37px] object-cover w-[14%] md:w-full"
                    src="images/img_investingstocks.png"
                    alt="investingstocks"
                  />
                  <Img
                    className="md:flex-1 h-[346px] sm:h-auto md:ml-[0] ml-[78px] md:mt-0 mt-0.5 object-cover w-[14%] md:w-full"
                    src="images/img_investingbitcoin.png"
                    alt="investingbitcoi"
                  />
                  <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[61px] md:mt-0 mt-9 pt-0.5">
                    <Text
                      className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                      size="txtAgrandirGrandHeavy22"
                    >
                      Bitcoin
                    </Text>
                    <Text
                      className="leading-[22.00px] text-base text-black-900 tracking-[0.30px] w-full"
                      size="txtMulishRegular16"
                    >
                      Cash App is the fastest way to convert dollars to bitcoin.
                      From your home screen, six taps are all it takes to stack
                      sats, buy an entire bitcoin, or just see what it’s all
                      about.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[1%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto w-[91%]">
                <div className="flex flex-col items-center justify-start w-auto">
                  <div className="flex flex-row gap-5 items-center justify-start w-auto">
                    <Button
                      className="border border-black-900 border-solid cursor-pointer flex items-center justify-center min-w-[170px]"
                      leftIcon={
                        <div className="mr-[13px] bg-green-A700">
                          <Img src="images/img_close.svg" alt="close" />
                        </div>
                      }
                      color="white_A700"
                    >
                      <div className="font-extrabold text-center text-xs tracking-[0.50px] uppercase">
                        APP STORE
                      </div>
                    </Button>
                    <Button
                      className="border border-black-900 border-solid cursor-pointer flex items-center justify-center min-w-[170px]"
                      leftIcon={
                        <div className="mr-[17px] bg-green-A700">
                          <Img src="images/img_vector.svg" alt="Vector" />
                        </div>
                      }
                      color="white_A700"
                    >
                      <div className="font-extrabold text-center text-xs tracking-[0.50px] uppercase">
                        GOOGLE PLAY
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col font-mulish items-center justify-start md:ml-[0] ml-[358px] w-auto">
                  <Text
                    className="leading-[13.00px] text-[10px] text-gray-700"
                    size="txtMulishBold10Gray700"
                  >
                    <>
                      Brokerage services by Cash App Investing LLC, member FINRA
                      / SIPC.
                      <br />
                      See our BrokerCheck. Investing involves risk; you may lose
                      money. Bitcoin trading offered by Cash App. Cash App
                      Investing does not trade bitcoin and Cash App is not a
                      member of FINRA or SIPC. Cash App facilitates banking
                      services through Sutton Bank and Lincoln Savings Bank,
                      Members FDIC.
                    </>
                  </Text>
                </div>
                <PagerIndicator
                  className="flex gap-[30px] h-6 items-center justify-start md:ml-[0] ml-[35px] w-[126px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 bg-black-900 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-[17px] bg-black-900 w-[21px]"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CashApp1Page;
