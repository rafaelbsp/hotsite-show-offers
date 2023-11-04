interface CouponProps {
  title: string;
  description: string;
  code: string;
}

function CouponsList({title, description, code}: CouponProps) {
	return (
		<li>
			<div class="relative flex flex-col items-center w-[250px] rounded overflow-hidden">
				<div class="relative w-full h-40 bg-[#D1D1D1] p-4 overflow-hidden">
					<h3 class="text-[#464646] font-black text-xl">{title}</h3>
					<p class="text-[#464646] font-light text-sm">{description}</p>
				</div>
				<div class="relative w-[calc(100%_-_20px)] h-[30px] bg-[#D1D1D1] 
					before:absolute before:block before:w-[44px] before:h-[44px] before:content-[''] before:rounded-full before:border-[10px] before:border-solid before:border-[#D1D1D1] before:left-[-36px] before:top-[-8px] before:z-10
					after:absolute after:block after:w-[44px] after:h-[44px] after:content-[''] after:rounded-full after:border-[10px] after:border-solid after:border-[#D1D1D1] after:right-[-36px] after:top-[-8px] after:z-10"
				>
					<span class="absolute top-[-5px] block w-full h-0 mx-0 my-auto border-b-[#A0A0A0] border-b border-dashed bottom-0"></span>
				</div>
				<div class="relative w-full h-auto bg-[#D1D1D1] p-4">
					<p class="text-[#464646] font-black text-base">{code}</p>
				</div>
			</div>
		</li>
	)
}
	
export default CouponsList;