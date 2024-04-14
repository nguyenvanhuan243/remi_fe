import React from 'react'

const Modal = ({ isOpen, setIsOpen, title, html }) => {
	return (
		<div
			className={
				isOpen
					? 'fixed inset-1 z-10 overflow-y-auto scrollbar-hide'
					: 'hidden'
			}
		>
			<div className="flex min-h-screen items-center justify-center">
				<div className="fixed left-0 top-0 h-full w-full bg-primary/10 backdrop-blur-sm" />
				<div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all scrollbar-hide">
					<div>
						<div
							data-v-e52900ae=""
							data-v-eaf4cb2e=""
							class="title-wrapper title"
						>
							<div data-v-e52900ae="" class="title-info">
								<h5 data-v-e52900ae="" className="title">
									{title}{' '}
								</h5>
								<div
									data-v-8622af02=""
									data-v-e52900ae=""
									class="brand-icon icon"
								//   style="height:32px;line-height:32px"
								>
									<img
										data-v-8622af02=""
										alt="USDT icon"
										src="https://d2refp30laz1gf.cloudfront.net/icon/coin/coin_usdt.svg?20231122"
										loading="eager"
										class="_icon"
									/>
									<p data-v-8622af02="" class="_text">
										USDT{' '}
									</p>
								</div>
							</div>
						</div>
						<button id="close-modal" onClick={() => setIsOpen(false)}>
							Close
                            </button>
					</div>
					{html}
				</div>
			</div>
		</div>
	)
}

export default Modal
