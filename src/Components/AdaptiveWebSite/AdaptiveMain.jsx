import React from 'react'
import AdaptiveSlider from './AdaptiveSliders'
const arr = ["Sadece Netflix'te", "Yeni Çıkanlar", "Yeniden İzle", "Lost in Space adlı yapımı izleyenlere öneriler", "Yerli Drama Filmleri", "Önceki İçerikler", "Amerika Yapımı Suç Drama Dizileri", "Macera Dizileri", "Tanıdık Diziler"]
function AdaptiveMain() {
	return (
		<main className='text-white pl-[20px] pt-[10px]'>
			{
				arr.map((item, i) => (
					<div key={i} className='mb-[20px]'>
						<h1 className='text-[#999] text-[1.2em] font-bold '>{item}</h1>
						<AdaptiveSlider />
					</div>
				))

			}
		</main>
	)
}

export default AdaptiveMain