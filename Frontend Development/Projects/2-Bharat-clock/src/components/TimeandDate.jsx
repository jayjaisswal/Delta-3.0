function TimeandDate() {
  let time = new Date();
  return (
    <div class="discription lead">
      <p>
        This is the current time: {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
}
export default TimeandDate;
