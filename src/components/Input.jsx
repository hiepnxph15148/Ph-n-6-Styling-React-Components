export default function Input ({ label,invalid, ...props})  {
  let labelClassName ='block mb-2 text-xs font-bold tracking-wide text-stone-200 uppercase'
  let inputClassName ='w-full px-3 py-2 leading-tight bg-stone-300 text-gray-700 border rounded shadow'
  
  if(invalid) {
    labelClassName +=' text-red-400'
    inputClassName +=' text-red-500'
  }else{
    labelClassName +=' text-stone-300'
    inputClassName +='text-gray-700 bg-stone-300'
  }
    return( 
    <>
    <label className={labelClassName}>{label}</label>
    <input className={inputClassName} {...props} />
    </>
    );
}