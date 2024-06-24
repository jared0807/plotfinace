import "./App.css";
import {useState } from "react";
function App() {
  const [isStakeModal, setIsStakeModal] = useState(false);
  const [isUnstakeModal, setIsUnstakeModal] = useState(false);
  return (
    <div className="w-full h-full flex justify-center bg-black p-5">
      {/* Stake Modal */}
      <div className={`w-screen h-screen bg-black/50 z-50 fixed top-0 left-0 justify-center items-center ${isStakeModal?"flex":"hidden"}`}>
        <div className="max-w-[400px] w-full flex justify-center items-center  bg-gradient-to-br from-[#59b7c4] to-black p-[2px] rounded-2xl">
          <div className="w-full flex justify-center items-center  bg-gradient-to-br from-[#4EA7B3AA] to-transparent p-[2px] rounded-2xl">
            <div className="py-6 px-4 w-full relative flex-col gap-8 flex justify-center items-center">
              <div className="absolute top-4 right-4 flex p-1 cursor-pointer text-white w-8 h-8 justify-center items-center bg-white/20 rounded-full" onClick={()=>setIsStakeModal(false)}>
                &#10006;
              </div>
              <span className="gt-american text-2xl text-white">
                STAKE $PLOTS
              </span>
              <div className="flex flex-col gap-2 w-full">
                <div className="text-sm text-white/40">TOTAL DEPOSIT</div>
                <div className="p-2 bg-white/30 flex justify-between h-[49px] border-white/20 border-[2px] w-full rounded-xl">
                  <div className="flex items-center gap-1">
                    <img src="/images/plot.png" className="w-6 h-6"  alt=""/>
                    <input className="bg-transparent outline-none flex flex-auto text-base text-white" />
                  </div>

                  <div className="flex items-center gap-1 h-full">
                    <div className="w-[55px] bg-white/30 text-[#DDDDDE] h-full flex items-center justify-center rounded-md">
                      MAX
                    </div>
                    <div className="gt-american font-semibold px-4 py-2 w-[55px] bg-white text-black h-full flex items-center justify-center rounded-md">
                      Stake
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2 justify-center items-center cursor-pointer rounded-full text-white">
                <div className=" shadow-character-glow-green w-full rounded-2xl">
                  <div className="flex w-full items-center justify-center rounded-full p-[2px] opacity-90 transition-opacity bg-glow-button-green-border">
                    <div className="gt-american flex h-7 w-full select-none items-center justify-end rounded-full px-3 text-center text-[14px] bg-glow-button-green">
                      100%
                    </div>
                  </div>
                </div>
                <div className="py-2 w-full flex justify-between border-t-2 border-white/20">
                  <div className="text-white/20 text-base">0%</div>
                  <div className="text-white/20 text-base">25%</div>
                  <div className="text-white/20 text-base">50%</div>
                  <div className="text-white/20 text-base">75%</div>
                  <div className="text-white/20 text-base">100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unstake Modal */}
      <div className={`w-screen h-screen bg-black/50 z-50 fixed top-0 left-0 justify-center items-center ${isUnstakeModal?"flex":"hidden"}`}>
        <div className="max-w-[400px] w-full flex justify-center items-center  bg-gradient-to-br from-[#59b7c4] to-black p-[2px] rounded-2xl">
          <div className="w-full flex justify-center items-center  bg-gradient-to-br from-[#4EA7B3AA] to-transparent p-[2px] rounded-2xl">
            <div className="py-6 px-4 w-full relative flex-col gap-8 flex justify-center items-center">
              <div className="absolute top-4 right-4 flex p-1 cursor-pointer text-white w-8 h-8 justify-center items-center bg-white/20 rounded-full" onClick={()=>setIsUnstakeModal(false)}>
                &#10006;
              </div>
              <span className="gt-american text-2xl text-white">
              UNSTAKE $PLOTS
              </span>
              <div className="flex flex-col gap-2 w-full">
                <div className="text-sm text-white/40">TOTAL DEPOSIT</div>
                <div className="p-2 bg-white/30 flex justify-between h-[49px] border-white/20 border-[2px] w-full rounded-xl">
                  <div className="flex items-center gap-1">
                    <img src="/images/plot.png" className="w-6 h-6"  alt=""/>
                    <input className="bg-transparent outline-none flex flex-auto text-base text-white" />
                  </div>

                  <div className="flex items-center gap-1 h-full">
                    <div className="w-[55px] bg-white/30 text-[#DDDDDE] h-full flex items-center justify-center rounded-md">
                      MAX
                    </div>
                    <div className="gt-american font-semibold px-4 py-2 bg-white text-black h-full flex items-center justify-center rounded-md">
                      Unstake
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2 justify-center items-center cursor-pointer rounded-full text-white">
                <div className=" shadow-character-glow-green w-full rounded-2xl">
                  <div className="flex w-full items-center justify-center rounded-full p-[2px] opacity-90 transition-opacity bg-glow-button-green-border">
                    <div className="gt-american flex h-7 w-full select-none items-center justify-end rounded-full px-3 text-center text-[14px] bg-glow-button-green">
                      100%
                    </div>
                  </div>
                </div>
                <div className="py-2 w-full flex justify-between border-t-2 border-white/20">
                  <div className="text-white/20 text-base">0%</div>
                  <div className="text-white/20 text-base">25%</div>
                  <div className="text-white/20 text-base">50%</div>
                  <div className="text-white/20 text-base">75%</div>
                  <div className="text-white/20 text-base">100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1180px] w-full">
        <div className="flex flex-col gap-6">
          <div className=" text-5xl md:text-[84px] font-semibold bg-gradient-to-r from-[#FFFFFF] to-[#a5b2e0] bg-clip-text text-transparent  gt-american">
            Claim & Stake
          </div>
          <div className=" text-base md:text-xl text-white">{`Plots holders (Ethereum mainnet only) can stake their $PLOTS in the launchpad staking module to receive perks such as further $PLOTS distributions as well as supported game tokens. Learn more here.`}</div>
        </div>
        <div className=" mt-6 w-full h-ull bg-gradient-to-br from-[#4EA7B355] to-transparent p-[2px] rounded-2xl">
          <div className="bg-gradient-to-br from-[#7A4EB3]/30 to-[#010106] p-6 rounded-2xl">
            <div className="w-full gap-9 flex flex-col">
              <div className="gap-5 flex flex-col w-full">
              <div className="text-base md:text-2xl text-white font-light gt-american">
                YOUR STAKING POINTS
              </div>
              <div className="text-base md:text-2xl text-white font-light gt-american">
                Your leaderboard rank #33
              </div>
              <div className="flex flex-row items-center gap-[10px]">
                <span className="font-semibold text-[46px] md:text-7xl text-white gt-american">
                  1,000
                </span>
                <span className="font-semibold text-2xl md:text-4xl text-[#8571D3] gt-american">
                  + 1,000 pts per hour
                </span>
              </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-white text-4xl md:text-5xl gt-american">
                  Claimable Plots
                </div>
                <div className="bg-white/5 w-full items-center flex flex-row justify-between p-3 rounded-xl">
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/plot.png"
                      className="w-6 md:w-[50px] h-6 md:h-[50px]"
                       alt=""
                    />
                    <span className=" text-2xl md:text-[40px] mt-[8px] text-white gt-american">
                      1,000
                    </span>
                    <span className=" text-[14px] md:text-[17px] text-[#A09F9F]  gt-american">
                      $1,000
                    </span>
                  </div>
                  <div className="w-[110px] flex justify-center items-center cursor-pointer rounded-full text-white shadow-character-glow-green">
                    <div className="flex w-full items-center justify-center rounded-full p-[2px] opacity-90 transition-opacity bg-glow-button-green-border">
                      <div className="gt-american flex h-9 w-full select-none items-center justify-center rounded-full px-3 text-center text-[14px] bg-glow-button-green" onClick={()=>setIsStakeModal(true)}>
                        Claim
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-white text-4xl md:text-5xl gt-american">
                  Staked Plots
                </div>
                <div className="bg-white/5 p-3 rounded-xl w-full max-w-[400px]">
                  <div className="flex items-center gap-3 w-auto">
                    <span className=" text-base text-white gt-american">
                      Total Staked:
                    </span>
                    <div className="flex gap-1">
                      <img src="/images/plot.png" className="w-6 h-6" alt="" />
                      <span className=" text-base text-white  gt-american">{`30,000,000 (50% of circ.cap.)`}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl gap-4 w-full flex flex-col md:flex-row justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-base gt-american">
                      Your wallet balance
                    </span>
                    <div className="flex gap-1">
                      {" "}
                      <img src="/images/plot.png" className="w-6 h-6" alt="" />
                      <span className=" text-lg text-white  gt-american">
                        100,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-base gt-american">
                      Your staking balance
                    </span>
                    <div className="flex gap-1">
                      {" "}
                      <img src="/images/plot.png" className="w-6 h-6" alt="" />
                      <span className=" text-lg text-white  gt-american">
                        50,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-base gt-american">
                      Your staking multiplier
                    </span>
                    <div className="flex gap-1">
                      <span className=" text-lg text-white  gt-american">
                        1.50x
                        <span className="text-lg text-gray-400 ml-1">
                          {`(Increases 0.5x per month)`}{" "}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-[110px] flex justify-center items-center cursor-pointer rounded-full text-white shadow-character-glow-green" onClick={()=>setIsStakeModal(true)}>
                      <div className="flex w-full items-center justify-center rounded-full p-[2px] opacity-90 transition-opacity bg-glow-button-green-border">
                        <div className="gt-american flex h-9 w-full select-none items-center justify-center rounded-full px-3 text-center text-[14px] bg-glow-button-green">
                          Stake
                        </div>
                      </div>
                    </div>
                    <div className="w-[110px] flex justify-center items-center cursor-pointer rounded-full text-white shadow-character-glow-orange" onClick={()=>setIsUnstakeModal(true)}>
                      <div className="flex w-full items-center justify-center rounded-full p-[2px] opacity-90 transition-opacity bg-glow-button-orange-border">
                        <div className="gt-american flex h-9 w-full select-none items-center justify-center rounded-full px-3 text-center text-[14px] bg-glow-button-orange">
                          Unstake
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="text-white text-4xl md:text-5xl gt-american">
                  Staked LP Tokens
                </div>
                <div className="bg-white/5 p-3 rounded-xl gap-4 w-full flex flex-col md:flex-row justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-base gt-american">
                      Your staking multiplier
                    </span>
                    <div className="flex gap-1">
                      <span className=" text-lg text-white  gt-american">{`1.50x (Increases 0.5x per month)`}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-base gt-american">
                      Your wallet balance
                    </span>
                    <div className="flex gap-1">
                      <span className=" text-lg text-white  gt-american">
                        50,000 LP PLOTS
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-base gt-american">
                      Your rewards
                    </span>
                    <div className="flex gap-1">
                      {" "}
                      <img src="/images/plot.png" className="w-6 h-6" alt=""/>
                      <span className=" text-lg text-white  gt-american">
                        100,000
                        <span className="text-lg text-gray-400 ml-1">
                          {`(Increases 0.5x per month)`}{" "}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-[110px] flex justify-center items-center cursor-pointer rounded-full text-white shadow-character-glow-green" onClick={()=>setIsStakeModal(true)}>
                      <div className="flex w-full items-center justify-center rounded-full p-[2px] opacity-90 transition-opacity bg-glow-button-green-border">
                        <div className="gt-american flex h-9 w-full select-none items-center justify-center rounded-full px-3 text-center text-[14px] bg-glow-button-green">
                          Stake
                        </div>
                      </div>
                    </div>
                    <div className="w-[110px] flex justify-center items-center cursor-pointer rounded-full text-white shadow-character-glow-orange" onClick={()=>setIsUnstakeModal(true)}>
                      <div className="flex w-full items-center justify-center rounded-full p-[2px] opacity-90 transition-opacity bg-glow-button-orange-border">
                        <div className="gt-american flex h-9 w-full select-none items-center justify-center rounded-full px-3 text-center text-[14px] bg-glow-button-orange">
                          Unstake
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
