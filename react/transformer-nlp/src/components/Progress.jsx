// react props 通过函数参数
export default function Progress({ text, percentage }) {
    // 简化三元运算符 percentage ? percentage : 0  我看到了阮一峰的es6手册
    percentage = percentage??0;
    return (
        <div className="progress-container">
            <div 
                className="progress-bar"
                style={{width: `${percentage}%`}}
            >
                {text} ({`${percentage.toFixed(2)}`}%)
            </div>
        </div>
    )
}